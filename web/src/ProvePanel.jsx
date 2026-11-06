import { useState } from "react";

// Prove-it checklist: every claim on the two validated diagrams maps to a runnable prompt
// in the AI-DEMO2 Personal Agent Studio and the evidence to look for. Ticking is session-local
// (a checklist, not a test result); the tally keeps the presenter honest.

const CLAIMS = {
  "personal-agent-chatgpt": [
    { id: "pa-1", n: 1, claim: "User signs in — user token issued", prompt: null, evidence: 'Pipeline step "Sign-in sub demouser" · Token Chain "User token" card: iss, sub, aud, RS256' },
    { id: "pa-2", n: 2, claim: "Agent token — the agent's own client (client_credentials)", prompt: "My courses", evidence: 'Token Chain "Actor token" card: client_credentials, client 0b412e8b-…, aud enduser.example.com' },
    { id: "pa-3", n: 3, claim: "Token exchange (RFC 8693) — sub=user, act=agent, scope narrowed", prompt: "My courses", evidence: '"Exchanged token" card: sub demouser, act.sub (agent), aud api.example.com:3036/mcp, scope narrowed 7 → 2' },
    { id: "pa-4", n: 4, claim: "MCP is protected — tokenless calls get 401", prompt: "My courses", evidence: "Pipeline: tools/list 401 → tools permitted (243)" },
    { id: "pa-5", n: 5, claim: "Gateway validates the exchanged token", prompt: "My courses", evidence: "Pipeline: tools/call 401 → Gateway introspection valid" },
    { id: "pa-6", n: 6, claim: "Fine-grained authorization per tool (PingOne Authorize)", prompt: "access my sensitive student finance", evidence: "Authorize engine pingone; deeper A2A delegation (act-chain depth 2, narrower scope)" },
    { id: "pa-7", n: 7, claim: "HITL — sensitive actions pause for human approval", prompt: "register for a course", evidence: 'Agent: "Transaction requires human approval (HITL consent)"; Step-up in flight; Gateway authorize INDETERMINATE' },
    { id: "pa-8", n: 8, claim: "Intent token — minted by the BFF, not the AS", prompt: "My courses", evidence: 'Token Chain "Intent token" card: intent, tools allowed, prompt_hash' },
  ],
  "digital-assistant-v2": [
    { id: "da-1", n: 1, claim: "Sign-in issues the user token", prompt: "decode my jwt token", evidence: "Decoded session token reply: sub, client, iss, aud, scopes, RS256" },
    { id: "da-2", n: 2, claim: "Agent token — client_credentials with its own client_id", prompt: "My courses", evidence: '"Actor token" card (client_credentials)' },
    { id: "da-3", n: 3, claim: "Token Exchange — Person token + Agent token → TX token", prompt: "My courses", evidence: '"Exchanged token" card: sub + act.sub, aud + scope narrowing' },
    { id: "da-4", n: 4, claim: "Wrong token is refused (MCP Tools MUST have MCP Server token)", prompt: "My courses", evidence: "tools/list 401 / tools/call 401 before the valid token" },
    { id: "da-5", n: 5, claim: "Agent is explicit in the act claim", prompt: "My courses", evidence: '"Exchanged token" card shows act.sub distinct from sub' },
    { id: "da-6", n: 6, claim: "Gateway validates aud before the tool executes", prompt: "My courses", evidence: "Gateway introspection valid; aud matches the MCP route" },
  ],
};

export default function ProvePanel({ diagramId }) {
  const [done, setDone] = useState({});
  const claims = CLAIMS[diagramId] || [];
  if (!claims.length) return null;
  const count = claims.filter((c) => done[c.id]).length;

  function copy(text) {
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).catch(() => {});
  }

  return (
    <section className="prove" aria-label="Prove it live" data-testid="prove-panel">
      <h3>Prove it live</h3>
      <p className="muted small">
        Every claim on this diagram maps to a prompt in the governed personal-agent demo and the
        evidence to look for in its Token Chain panel. Send the prompt, check the evidence, tick the row.
      </p>
      <ol className="prove-list">
        {claims.map((c) => (
          <li key={c.id} className={done[c.id] ? "prove-row done" : "prove-row"}>
            <label>
              <input
                type="checkbox"
                checked={!!done[c.id]}
                onChange={() => setDone((p) => ({ ...p, [c.id]: !p[c.id] }))}
                aria-label={`Proven: ${c.claim}`}
                data-testid={`prove-check-${c.id}`}
              />
              <span>
                <strong>{c.n}. {c.claim}</strong>
                {c.prompt && (
                  <span className="prove-prompt">
                    {" "}Prompt: <code>{c.prompt}</code>{" "}
                    <button type="button" className="prove-copy" onClick={() => copy(c.prompt)}>copy</button>
                  </span>
                )}
                <span className="prove-evidence">Evidence: {c.evidence}</span>
              </span>
            </label>
          </li>
        ))}
      </ol>
      <p className="muted small" data-testid="prove-tally">Checked {count} of {claims.length} claims.</p>
    </section>
  );
}
