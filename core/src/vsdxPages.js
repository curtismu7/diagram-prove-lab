// Eight more pages of the Lucid "Digital Assistant With 3rd parties" .vsdx, rebuilt as diagram data (same method as v2Exact.js).
// Hostnames, tenant and client ids are placeholders (example.com, EXAMPLE-...); a customer name in the source is generalised.
// Generated once from the vsdx export; this file is the source now (edit it, do not regenerate over hand fixes).
export const VSDX_PAGES = [
 {
  "schema": "diagram-prove-lab/1",
  "id": "v1-agent-gw-authorize-exact",
  "title": "V1 Agent — GW/Authorize (from the Lucid .vsdx)",
  "lede": "Page \"V1 Agent - GW/Authorize\" of the Lucid vsdx (token boxes sit in the note band at the bottom). The numbered narrative on the page drives the walkthrough: agent token, tool list, a tool call refused for lack of a user token, login, token exchange, gateway authorization, per-route exchanges, then a transfer that needs HITL.",
  "groups": {
   "actor": {
    "label": "Actors",
    "color": "blue"
   },
   "agent": {
    "label": "Agent runtime",
    "color": "red"
   },
   "token": {
    "label": "Token service",
    "color": "amber"
   },
   "authz": {
    "label": "Authorization",
    "color": "green"
   },
   "gateway": {
    "label": "MCP gateway",
    "color": "red"
   },
   "resource": {
    "label": "Resources",
    "color": "dark"
   },
   "grey": {
    "label": "Session / inputs",
    "color": "grey"
   },
   "note": {
    "label": "Token and payload notes",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "agent1",
    "group": "agent",
    "label": "agent1",
    "sub": [],
    "x": 310,
    "y": 390
   },
   {
    "id": "api",
    "group": "resource",
    "label": "API",
    "sub": [
     "investments-resource.example.com",
     "/balance",
     "API key: 12345"
    ],
    "x": 1130,
    "y": 420
   },
   {
    "id": "olb",
    "group": "actor",
    "label": "OLB",
    "sub": [
     "Application"
    ],
    "x": 0,
    "y": 320
   },
   {
    "id": "oauth-rs",
    "group": "resource",
    "label": "OAuth RS",
    "sub": [
     "aud: olb-resource.example.com",
     "/balance - scope: balance",
     "/transfer - scope: transfer"
    ],
    "x": 910,
    "y": 300
   },
   {
    "id": "token",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: olb-resource.example.com",
     "scope: balance, transfer"
    ],
    "x": 0,
    "y": 621
   },
   {
    "id": "idp",
    "group": "token",
    "label": "PingOne / PF / AIC",
    "sub": [
     "AIC"
    ],
    "x": 80,
    "y": 0
   },
   {
    "id": "session",
    "group": "grey",
    "label": "Ping Session",
    "sub": [],
    "x": 70,
    "y": 130
   },
   {
    "id": "chatbot",
    "group": "actor",
    "label": "chatbot",
    "sub": [],
    "x": 70,
    "y": 410
   },
   {
    "id": "mcp-invest",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-invest.example.com"
    ],
    "x": 900,
    "y": 430
   },
   {
    "id": "authorize",
    "group": "authz",
    "label": "PingAuthorize",
    "sub": [
     "OpenAPI (this might be a way for Authorize to dynamically",
     "determine scope requirements per tool)"
    ],
    "x": 620,
    "y": 10
   },
   {
    "id": "llm",
    "group": "agent",
    "label": "LLM",
    "sub": [],
    "x": 310,
    "y": 490
   },
   {
    "id": "token-2",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: agent",
     "scope: balance",
     "may_act: agent1"
    ],
    "x": 300,
    "y": 621
   },
   {
    "id": "ats-agent",
    "group": "token",
    "label": "Agent",
    "sub": [],
    "x": 290,
    "y": 240
   },
   {
    "id": "token-exc",
    "group": "token",
    "label": "Token Exc",
    "sub": [],
    "x": 380,
    "y": 90
   },
   {
    "id": "introspect",
    "group": "token",
    "label": "Introspect",
    "sub": [],
    "x": 510,
    "y": 240
   },
   {
    "id": "token-3",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: agent1",
     "aud: agent1.example.com"
    ],
    "x": 600,
    "y": 621
   },
   {
    "id": "tx-token",
    "group": "note",
    "label": "TX Token",
    "sub": [
     "sub: user1",
     "aud: mcp-gw.example.com",
     "scope: balance",
     "act: agent1",
     "transaction details"
    ],
    "x": 900,
    "y": 621
   },
   {
    "id": "client-cred",
    "group": "token",
    "label": "Client Cred",
    "sub": [],
    "x": 460,
    "y": 170
   },
   {
    "id": "mcp-olb",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-olb.example.com"
    ],
    "x": 760,
    "y": 180
   },
   {
    "id": "tx-token-2",
    "group": "note",
    "label": "TX Token",
    "sub": [
     "sub: user1",
     "aud: mcp-gw.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 1200,
    "y": 621
   },
   {
    "id": "protected-resource-metadata-",
    "group": "note",
    "label": "Protected-resource metadata (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-invest.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\"]}"
    ],
    "x": 0,
    "y": 777
   },
   {
    "id": "gateway",
    "group": "gateway",
    "label": "MCP Gateway",
    "sub": [
     "Route: mcp-olb.example.com/mcp",
     "scopes: balance, transfer",
     "Route: mcp-invest.example.com/mcp",
     "scope: balance"
    ],
    "x": 580,
    "y": 400
   },
   {
    "id": "user",
    "group": "actor",
    "label": "User",
    "sub": [],
    "x": 0,
    "y": 220
   },
   {
    "id": "token-4",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-olb.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 300,
    "y": 777
   },
   {
    "id": "token-5",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: olb-resource.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 600,
    "y": 777
   },
   {
    "id": "json-rpc-error-insufficient-",
    "group": "note",
    "label": "JSON-RPC error: insufficient scope",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":\"TX id\",",
     "\"error\":{\"code\":-32001,",
     "\"message\":\"Unauthorized\",\"data\":{",
     "\"error\":\"insufficient_scope\",",
     "\"required_scopes\":[\"transfer\"],",
     "\"provided_scopes\":[\"balance\"]}}}"
    ],
    "x": 900,
    "y": 777
   },
   {
    "id": "token-6",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-invest.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 1200,
    "y": 777
   }
  ],
  "edges": [
   {
    "source": "session",
    "target": "idp"
   },
   {
    "source": "chatbot",
    "target": "agent1"
   },
   {
    "source": "mcp-olb",
    "target": "oauth-rs"
   },
   {
    "source": "mcp-invest",
    "target": "api",
    "label": "API key (via vault)"
   },
   {
    "source": "gateway",
    "target": "mcp-invest"
   },
   {
    "source": "agent1",
    "target": "gateway"
   },
   {
    "source": "agent1",
    "target": "llm"
   },
   {
    "source": "agent1",
    "target": "token-exc"
   },
   {
    "source": "agent1",
    "target": "ats-agent",
    "label": "1"
   },
   {
    "source": "gateway",
    "target": "token-exc"
   },
   {
    "source": "gateway",
    "target": "client-cred"
   },
   {
    "source": "gateway",
    "target": "mcp-olb"
   },
   {
    "source": "gateway",
    "target": "authorize"
   },
   {
    "source": "authorize",
    "target": "introspect"
   },
   {
    "source": "user",
    "target": "olb"
   },
   {
    "source": "mcp-olb",
    "target": "token-exc"
   },
   {
    "source": "mcp-olb",
    "target": "client-cred"
   },
   {
    "source": "authorize",
    "target": "mcp-olb"
   }
  ],
  "steps": [
   {
    "title": "Agent starts",
    "what": "1. The agent starts and gets its own token (client credentials, etc.).",
    "edges": [
     8
    ]
   },
   {
    "title": "Tool list",
    "what": "2. The agent gets the tool list from the MCP gateway. 2a. It presents its own token and Authorize returns permit or deny.",
    "edges": [
     5,
     12
    ]
   },
   {
    "title": "User asks the chatbot",
    "what": "3. The user asks the chatbot to do something, like check balance (the check_balance MCP tool). 3a. The chatbot uses the agent. 3b. The agent asks the LLM, with the MCP tool list and the chatbot prompt, which tool to use. 3c. The LLM says it needs check_balance.",
    "edges": [
     14,
     1,
     6
    ]
   },
   {
    "title": "Call with no user token",
    "what": "4. The agent calls check_balance. 4a. The gateway calls Authorize. 4b. Authorize denies: there is no subject (human) token. 4c. Authorize answers with the required scope. 4d. The gateway returns a JSON-RPC unauthorized error that carries the required scope.",
    "edges": [
     5,
     12
    ]
   },
   {
    "title": "User logs in",
    "what": "5. The agent tells the chatbot the user must log in and get a token with aud: agent1, scope: balance. 5a. The application logs the user in and gets the subject (human) token with may_act: agent1.",
    "edges": [
     14,
     0
    ]
   },
   {
    "title": "Token exchange",
    "what": "6. The agent uses its own token (actor) plus the subject token for a token exchange. 6a. The TX token has aud: mcp-gw, scope: balance and the transaction details (id, prompt, etc.). Option: aud: mcp-olb, which needs assurance that the only path to the MCP is through the gateway.",
    "edges": [
     7
    ]
   },
   {
    "title": "Gateway authorizes",
    "what": "7. The MCP gateway calls Authorize with the TX token and the tool call. 7a. Authorize introspects and validates scopes, aud and tool-call details against policy. 7b. Authorize returns permit.",
    "edges": [
     12,
     13
    ]
   },
   {
    "title": "Gateway exchanges for the MCP",
    "what": "8. The gateway does a token exchange for the MCP: a new token whose aud is that MCP server.",
    "edges": [
     9,
     10,
     11
    ]
   },
   {
    "title": "MCP exchanges for the resource",
    "what": "9. The MCP does a token exchange for the Resource. 9a. API use case: the MCP uses a vault to get the API key for the Resource.",
    "edges": [
     15,
     16,
     2,
     4,
     3
    ]
   },
   {
    "title": "Response",
    "what": "10. The Resource responds. 10a. The Resource response. 10b. The MCP tool call response. 10c. The agent answers the chatbot.",
    "edges": []
   },
   {
    "title": "Transfer needs HITL",
    "what": "11. The human tries a transfer through the chatbot. 11a. The agent tries transfer_money. 11b. The gateway calls Authorize. 11c. Authorize denies (required scope: transfer, HITL). 11d. The gateway returns a JSON-RPC unauthorized error with the transfer scope and the HITL requirement (step-up or consent; depends on agent capabilities).",
    "edges": [
     5,
     12
    ]
   },
   {
    "title": "HITL, then retry",
    "what": "12. The agent starts HITL (CIBA) and does a token exchange with scope: balance transfer, keeping the original scope. 12a. Repeat steps 6a to 10.",
    "edges": [
     7
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "a2a-da-exact",
  "title": "A2A — Digital Assistant (from the Lucid .vsdx)",
  "lede": "Page \"A2A-DA\": the digital assistant calling MCP servers through the gateway with Authorize in the loop and a human-in-the-loop (HITL) push. Token boxes and the JSON-RPC payloads are shown as notes in the band at the bottom; the gateway routes, Return/Push and the Prompts and PKI inputs are folded into their parent boxes.",
  "groups": {
   "actor": {
    "label": "Actors",
    "color": "blue"
   },
   "agent": {
    "label": "Agent runtime",
    "color": "red"
   },
   "token": {
    "label": "Token service",
    "color": "amber"
   },
   "authz": {
    "label": "Authorization",
    "color": "green"
   },
   "gateway": {
    "label": "MCP gateway",
    "color": "red"
   },
   "resource": {
    "label": "Resources",
    "color": "dark"
   },
   "grey": {
    "label": "Session / inputs",
    "color": "grey"
   },
   "note": {
    "label": "Token and payload notes",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "agent1",
    "group": "agent",
    "label": "agent1",
    "sub": [
     "JSON-RPC interface",
     "Inputs: Prompts",
     "Inputs: PKI Creds"
    ],
    "x": 350,
    "y": 520
   },
   {
    "id": "api",
    "group": "resource",
    "label": "API",
    "sub": [
     "investments-resource.example.com",
     "/balance",
     "API key: 12345"
    ],
    "x": 1120,
    "y": 600
   },
   {
    "id": "olb",
    "group": "actor",
    "label": "OLB",
    "sub": [
     "Application"
    ],
    "x": 470,
    "y": 320
   },
   {
    "id": "oauth-rs",
    "group": "resource",
    "label": "OAuth RS",
    "sub": [
     "aud: olb-resource.example.com",
     "/balance - scope: balance",
     "/transfer - scope: transfer"
    ],
    "x": 1330,
    "y": 390
   },
   {
    "id": "token",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: olb-resource.example.com",
     "scope: balance, transfer"
    ],
    "x": 0,
    "y": 791
   },
   {
    "id": "idp",
    "group": "token",
    "label": "PingOne / PF / AIC",
    "sub": [
     "AIC"
    ],
    "x": 0,
    "y": 30
   },
   {
    "id": "session",
    "group": "grey",
    "label": "Ping Session",
    "sub": [],
    "x": 20,
    "y": 120
   },
   {
    "id": "chatbot",
    "group": "actor",
    "label": "chatbot",
    "sub": [],
    "x": 120,
    "y": 520
   },
   {
    "id": "mcp-invest",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-invest.example.com"
    ],
    "x": 970,
    "y": 490
   },
   {
    "id": "authorize",
    "group": "authz",
    "label": "PingAuthorize",
    "sub": [
     "Token introspect",
     "Fine grained AZ",
     "OpenAPI"
    ],
    "x": 890,
    "y": 170
   },
   {
    "id": "llm",
    "group": "agent",
    "label": "LLM",
    "sub": [],
    "x": 360,
    "y": 660
   },
   {
    "id": "ats-agent",
    "group": "token",
    "label": "Agent",
    "sub": [],
    "x": 360,
    "y": 430
   },
   {
    "id": "token-exc",
    "group": "token",
    "label": "Token Exc",
    "sub": [],
    "x": 660,
    "y": 200
   },
   {
    "id": "introspect",
    "group": "token",
    "label": "Introspect",
    "sub": [],
    "x": 870,
    "y": 0
   },
   {
    "id": "token-2",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: agent1",
     "aud: agent1.example.com"
    ],
    "x": 300,
    "y": 791
   },
   {
    "id": "token-3",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-gw.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 600,
    "y": 791
   },
   {
    "id": "token-4",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: mcp-gw",
     "aud: mcp-gw.example.com"
    ],
    "x": 900,
    "y": 791
   },
   {
    "id": "client-cred",
    "group": "token",
    "label": "Client Cred",
    "sub": [],
    "x": 630,
    "y": 120
   },
   {
    "id": "mcp-olb",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-olb.example.com"
    ],
    "x": 1100,
    "y": 350
   },
   {
    "id": "gateway",
    "group": "gateway",
    "label": "MCP Gateway",
    "sub": [
     "Route: mcp-olb.example.com/mcp",
     "scopes: balance, transfer",
     "Route: mcp-invest.example.com/mcp",
     "scope: balance"
    ],
    "x": 780,
    "y": 310
   },
   {
    "id": "protected-resource-metadata-",
    "group": "note",
    "label": "Protected-resource metadata: mcp-invest (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-invest.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\"]}"
    ],
    "x": 1200,
    "y": 791
   },
   {
    "id": "protected-resource-metadata--2",
    "group": "note",
    "label": "Protected-resource metadata: mcp-olb (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-olb.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\",\"transfer\"]}"
    ],
    "x": 1500,
    "y": 791
   },
   {
    "id": "token-5",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-olb.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 1800,
    "y": 791
   },
   {
    "id": "user",
    "group": "actor",
    "label": "User",
    "sub": [],
    "x": 230,
    "y": 320
   },
   {
    "id": "tools-list-result",
    "group": "note",
    "label": "tools/list result",
    "sub": [
     "result.tools:",
     "get_balance(account_id)",
     "transfer_funds(source_account,",
     "destination_account, amount,",
     "currency)",
     "(an inputSchema for each tool)"
    ],
    "x": 2100,
    "y": 791
   },
   {
    "id": "tools-list-request",
    "group": "note",
    "label": "tools/list request",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":1,",
     "\"method\":\"tools/list\"}"
    ],
    "x": 0,
    "y": 979
   },
   {
    "id": "tools-call-request",
    "group": "note",
    "label": "tools/call request",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":2,",
     "\"method\":\"tools/call\",\"params\":{",
     "\"name\":\"get_balance\",",
     "\"arguments\":",
     "{\"account_id\":\"12345\"}}}"
    ],
    "x": 300,
    "y": 979
   },
   {
    "id": "tools-call-result",
    "group": "note",
    "label": "tools/call result",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":2,\"result\":",
     "{\"content\":[{\"type\":\"text\",\"text\":",
     "\"The current balance for",
     "account 12345 is $1,250.42.\"}],",
     "\"isError\":false}}"
    ],
    "x": 600,
    "y": 979
   },
   {
    "id": "token-6",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: olb-resource.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 900,
    "y": 979
   },
   {
    "id": "token-7",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: mcp-olb",
     "aud: mcp-olb.example.com"
    ],
    "x": 1200,
    "y": 979
   },
   {
    "id": "token-8",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: agent",
     "scope: balance",
     "may_act: agent1"
    ],
    "x": 1500,
    "y": 979
   },
   {
    "id": "guardrails",
    "group": "agent",
    "label": "Guardrails",
    "sub": [
     "401/403 handler"
    ],
    "x": 580,
    "y": 530
   },
   {
    "id": "orchestration",
    "group": "token",
    "label": "Orchestration",
    "sub": [
     "Return",
     "Push"
    ],
    "x": 340,
    "y": 190
   },
   {
    "id": "webhook",
    "group": "actor",
    "label": "Webhook response",
    "sub": [],
    "x": 120,
    "y": 440
   },
   {
    "id": "token-9",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user2",
     "aud: agent",
     "scope: consent, balance, transfer",
     "may_act: agent1"
    ],
    "x": 1800,
    "y": 979
   }
  ],
  "edges": [
   {
    "source": "olb",
    "target": "oauth-rs",
    "label": "Token"
   },
   {
    "source": "olb",
    "target": "api",
    "label": "API key"
   },
   {
    "source": "session",
    "target": "idp"
   },
   {
    "source": "chatbot",
    "target": "agent1"
   },
   {
    "source": "mcp-olb",
    "target": "oauth-rs"
   },
   {
    "source": "mcp-invest",
    "target": "api"
   },
   {
    "source": "gateway",
    "target": "mcp-invest",
    "label": "API key 12345"
   },
   {
    "source": "agent1",
    "target": "gateway"
   },
   {
    "source": "agent1",
    "target": "llm"
   },
   {
    "source": "webhook",
    "target": "agent1",
    "label": "register/complete"
   },
   {
    "source": "agent1",
    "target": "token-exc"
   },
   {
    "source": "agent1",
    "target": "ats-agent"
   },
   {
    "source": "gateway",
    "target": "token-exc"
   },
   {
    "source": "gateway",
    "target": "client-cred"
   },
   {
    "source": "gateway",
    "target": "authorize"
   },
   {
    "source": "gateway",
    "target": "mcp-olb"
   },
   {
    "source": "authorize",
    "target": "introspect"
   },
   {
    "source": "user",
    "target": "olb"
   },
   {
    "source": "mcp-olb",
    "target": "token-exc"
   },
   {
    "source": "mcp-olb",
    "target": "client-cred"
   },
   {
    "source": "authorize",
    "target": "mcp-olb"
   },
   {
    "source": "guardrails",
    "target": "authorize",
    "label": "determine HITL"
   },
   {
    "source": "webhook",
    "target": "orchestration"
   },
   {
    "source": "guardrails",
    "target": "orchestration",
    "label": "HITL send push"
   },
   {
    "source": "user",
    "target": "webhook"
   }
  ],
  "steps": [
   {
    "title": "Agent identity",
    "what": "The agent runtime (JSON-RPC) authenticates to the token service as its own client (it holds the Prompts and PKI credentials listed in its box), and gets an agent token (client_id: agent1).",
    "edges": [
     11
    ]
   },
   {
    "title": "User signs in",
    "what": "The user signs in to the application (OLB) through Ping Session and gets the subject (human) token: sub: user1, aud: agent, may_act: agent1. The chatbot then passes the request to the agent, which asks the LLM which tool to use.",
    "edges": [
     17,
     2,
     3,
     8
    ]
   },
   {
    "title": "Tool list",
    "what": "The agent asks the gateway for the tool list with its own token. Authorize is asked what this agent may see and returns the allowed tools (Fine-grained AZ).",
    "edges": [
     7,
     14
    ]
   },
   {
    "title": "Tool call without a user token",
    "what": "The agent calls a tool in agent context only. Authorize denies it: there is no subject (human) token. The gateway answers with a JSON-RPC unauthorized error and the required scope, and the 401/403 handler in the agent reacts.",
    "edges": [
     7,
     14,
     8
    ]
   },
   {
    "title": "Token exchange (RFC 8693)",
    "what": "The agent exchanges its own token (actor) plus the user token (subject, may_act: agent1) for a TX token: sub: user1, act: agent1, aud: mcp-gw, scope: balance.",
    "edges": [
     10,
     11
    ]
   },
   {
    "title": "Gateway authorizes the TX token",
    "what": "The gateway sends the TX token and the tool call to PingAuthorize, which introspects it and checks scope, aud and the call details against policy.",
    "edges": [
     14,
     16
    ]
   },
   {
    "title": "Gateway exchanges for the MCP server",
    "what": "The gateway does its own token exchange (client credentials of mcp-gw) for a token whose aud is the MCP server, and forwards the call.",
    "edges": [
     12,
     13,
     15,
     20
    ]
   },
   {
    "title": "MCP exchanges for the resource",
    "what": "The MCP server exchanges again for the resource server (aud: olb-resource.example.com, scope: balance, act: agent1). The invest MCP server uses an API key from the gateway for its API.",
    "edges": [
     18,
     19,
     4,
     6,
     5
    ]
   },
   {
    "title": "Sensitive action: HITL",
    "what": "Guardrails ask Authorize to determine whether a human must approve (\"determine HITL\") and send a push to the user; the approval comes back through the webhook as \"register/complete\" and the orchestration returns to the agent.",
    "edges": [
     21,
     23,
     22,
     24
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "a2a-worker-hitl-exact",
  "title": "A2A — Worker with HITL (from the Lucid .vsdx)",
  "lede": "Page \"A2A-Worker[HITL]\": the same agent, gateway and Authorize path as the digital assistant, but the human comes in through a HITL UI and a webhook instead of a chatbot.",
  "groups": {
   "actor": {
    "label": "Actors",
    "color": "blue"
   },
   "agent": {
    "label": "Agent runtime",
    "color": "red"
   },
   "token": {
    "label": "Token service",
    "color": "amber"
   },
   "authz": {
    "label": "Authorization",
    "color": "green"
   },
   "gateway": {
    "label": "MCP gateway",
    "color": "red"
   },
   "resource": {
    "label": "Resources",
    "color": "dark"
   },
   "grey": {
    "label": "Session / inputs",
    "color": "grey"
   },
   "note": {
    "label": "Token and payload notes",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "agent1",
    "group": "agent",
    "label": "agent1",
    "sub": [
     "JSON-RPC interface",
     "Inputs: Prompts",
     "Inputs: PKI Creds"
    ],
    "x": 470,
    "y": 520
   },
   {
    "id": "api",
    "group": "resource",
    "label": "API",
    "sub": [
     "investments-resource.example.com",
     "/balance",
     "API key: 12345"
    ],
    "x": 740,
    "y": 580
   },
   {
    "id": "hitl-ui",
    "group": "actor",
    "label": "HITL UI",
    "sub": [],
    "x": 150,
    "y": 400
   },
   {
    "id": "oauth-rs",
    "group": "resource",
    "label": "OAuth RS",
    "sub": [
     "aud: olb-resource.example.com",
     "/balance - scope: balance",
     "/transfer - scope: transfer"
    ],
    "x": 1150,
    "y": 290
   },
   {
    "id": "idp",
    "group": "token",
    "label": "PingOne / PF / AIC",
    "sub": [
     "AIC"
    ],
    "x": 0,
    "y": 0
   },
   {
    "id": "session",
    "group": "grey",
    "label": "Ping Session",
    "sub": [],
    "x": 0,
    "y": 120
   },
   {
    "id": "mcp-invest",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-invest.example.com"
    ],
    "x": 1100,
    "y": 470
   },
   {
    "id": "authorize",
    "group": "authz",
    "label": "PingAuthorize",
    "sub": [
     "Token introspect",
     "Fine grained AZ",
     "OpenAPI"
    ],
    "x": 890,
    "y": 130
   },
   {
    "id": "llm",
    "group": "agent",
    "label": "LLM",
    "sub": [],
    "x": 480,
    "y": 680
   },
   {
    "id": "ats-agent",
    "group": "token",
    "label": "Agent",
    "sub": [],
    "x": 390,
    "y": 190
   },
   {
    "id": "token-exc",
    "group": "token",
    "label": "Token Exc",
    "sub": [],
    "x": 550,
    "y": 290
   },
   {
    "id": "introspect",
    "group": "token",
    "label": "Introspect",
    "sub": [],
    "x": 870,
    "y": 40
   },
   {
    "id": "token",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: agent1",
     "aud: agent1.example.com"
    ],
    "x": 0,
    "y": 811
   },
   {
    "id": "token-2",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-gw.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 300,
    "y": 811
   },
   {
    "id": "token-3",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: mcp-gw",
     "aud: mcp-gw.example.com"
    ],
    "x": 600,
    "y": 811
   },
   {
    "id": "client-cred",
    "group": "token",
    "label": "Client Cred",
    "sub": [],
    "x": 640,
    "y": 190
   },
   {
    "id": "mcp-olb",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-olb.example.com"
    ],
    "x": 920,
    "y": 250
   },
   {
    "id": "gateway",
    "group": "gateway",
    "label": "MCP Gateway",
    "sub": [
     "Route: mcp-olb.example.com/mcp",
     "scopes: balance, transfer",
     "Route: mcp-invest.example.com/mcp",
     "scope: balance"
    ],
    "x": 770,
    "y": 370
   },
   {
    "id": "protected-resource-metadata-",
    "group": "note",
    "label": "Protected-resource metadata: mcp-invest (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-invest.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\"]}"
    ],
    "x": 900,
    "y": 811
   },
   {
    "id": "protected-resource-metadata--2",
    "group": "note",
    "label": "Protected-resource metadata: mcp-olb (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-olb.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\",\"transfer\"]}"
    ],
    "x": 1200,
    "y": 811
   },
   {
    "id": "token-4",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-olb.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 1500,
    "y": 811
   },
   {
    "id": "user",
    "group": "actor",
    "label": "User",
    "sub": [],
    "x": 90,
    "y": 210
   },
   {
    "id": "tools-list-result",
    "group": "note",
    "label": "tools/list result",
    "sub": [
     "result.tools:",
     "get_balance(account_id)",
     "transfer_funds(source_account,",
     "destination_account, amount,",
     "currency)",
     "(an inputSchema for each tool)"
    ],
    "x": 1800,
    "y": 811
   },
   {
    "id": "tools-list-request",
    "group": "note",
    "label": "tools/list request",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":1,",
     "\"method\":\"tools/list\"}"
    ],
    "x": 0,
    "y": 999
   },
   {
    "id": "tools-call-request",
    "group": "note",
    "label": "tools/call request",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":2,",
     "\"method\":\"tools/call\",\"params\":{",
     "\"name\":\"get_balance\",",
     "\"arguments\":",
     "{\"account_id\":\"12345\"}}}"
    ],
    "x": 300,
    "y": 999
   },
   {
    "id": "tools-call-result",
    "group": "note",
    "label": "tools/call result",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":2,\"result\":",
     "{\"content\":[{\"type\":\"text\",\"text\":",
     "\"The current balance for",
     "account 12345 is $1,250.42.\"}],",
     "\"isError\":false}}"
    ],
    "x": 600,
    "y": 999
   },
   {
    "id": "token-5",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: olb-resource.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 900,
    "y": 999
   },
   {
    "id": "token-6",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: mcp-olb",
     "aud: mcp-olb.example.com"
    ],
    "x": 1200,
    "y": 999
   },
   {
    "id": "guardrails",
    "group": "agent",
    "label": "Guardrails",
    "sub": [
     "401/403 handler"
    ],
    "x": 510,
    "y": 420
   },
   {
    "id": "orchestration",
    "group": "token",
    "label": "Orchestration",
    "sub": [
     "Return",
     "Push"
    ],
    "x": 310,
    "y": 10
   },
   {
    "id": "webhook",
    "group": "actor",
    "label": "Webhook response",
    "sub": [],
    "x": 200,
    "y": 320
   },
   {
    "id": "token-7",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user2",
     "aud: agent",
     "scope: consent, balance, transfer",
     "may_act: agent1"
    ],
    "x": 1500,
    "y": 999
   }
  ],
  "edges": [
   {
    "source": "hitl-ui",
    "target": "oauth-rs",
    "label": "Token"
   },
   {
    "source": "hitl-ui",
    "target": "api",
    "label": "API key"
   },
   {
    "source": "session",
    "target": "idp"
   },
   {
    "source": "mcp-olb",
    "target": "oauth-rs"
   },
   {
    "source": "mcp-invest",
    "target": "api"
   },
   {
    "source": "gateway",
    "target": "mcp-invest",
    "label": "API key 12345"
   },
   {
    "source": "agent1",
    "target": "gateway"
   },
   {
    "source": "agent1",
    "target": "llm"
   },
   {
    "source": "hitl-ui",
    "target": "agent1",
    "label": "register/complete"
   },
   {
    "source": "agent1",
    "target": "token-exc"
   },
   {
    "source": "agent1",
    "target": "ats-agent"
   },
   {
    "source": "gateway",
    "target": "token-exc"
   },
   {
    "source": "gateway",
    "target": "client-cred"
   },
   {
    "source": "gateway",
    "target": "authorize"
   },
   {
    "source": "gateway",
    "target": "mcp-olb"
   },
   {
    "source": "authorize",
    "target": "introspect"
   },
   {
    "source": "user",
    "target": "hitl-ui"
   },
   {
    "source": "mcp-olb",
    "target": "token-exc"
   },
   {
    "source": "mcp-olb",
    "target": "client-cred"
   },
   {
    "source": "authorize",
    "target": "mcp-olb"
   },
   {
    "source": "guardrails",
    "target": "authorize",
    "label": "determine HITL"
   },
   {
    "source": "webhook",
    "target": "orchestration"
   },
   {
    "source": "guardrails",
    "target": "orchestration",
    "label": "HITL send push"
   }
  ],
  "steps": [
   {
    "title": "Agent identity",
    "what": "The agent runtime (JSON-RPC) authenticates to the token service as its own client (it holds the Prompts and PKI credentials listed in its box), and gets an agent token (client_id: agent1).",
    "edges": [
     10
    ]
   },
   {
    "title": "User signs in",
    "what": "The user reaches the HITL UI and signs in through Ping Session; the subject (human) token carries sub: user1, aud: agent, may_act: agent1. The HITL UI also holds its own token for the OAuth resource server and the API key for the API.",
    "edges": [
     16,
     2,
     0,
     1
    ]
   },
   {
    "title": "Tool list",
    "what": "The agent asks the gateway for the tool list with its own token. Authorize is asked what this agent may see and returns the allowed tools (Fine-grained AZ).",
    "edges": [
     6,
     13
    ]
   },
   {
    "title": "Tool call without a user token",
    "what": "The agent calls a tool in agent context only. Authorize denies it: there is no subject (human) token. The gateway answers with a JSON-RPC unauthorized error and the required scope, and the 401/403 handler in the agent reacts.",
    "edges": [
     6,
     13,
     7
    ]
   },
   {
    "title": "Token exchange (RFC 8693)",
    "what": "The agent exchanges its own token (actor) plus the user token (subject, may_act: agent1) for a TX token: sub: user1, act: agent1, aud: mcp-gw, scope: balance.",
    "edges": [
     9,
     10
    ]
   },
   {
    "title": "Gateway authorizes the TX token",
    "what": "The gateway sends the TX token and the tool call to PingAuthorize, which introspects it and checks scope, aud and the call details against policy.",
    "edges": [
     13,
     15
    ]
   },
   {
    "title": "Gateway exchanges for the MCP server",
    "what": "The gateway does its own token exchange (client credentials of mcp-gw) for a token whose aud is the MCP server, and forwards the call.",
    "edges": [
     11,
     12,
     14,
     19
    ]
   },
   {
    "title": "MCP exchanges for the resource",
    "what": "The MCP server exchanges again for the resource server (aud: olb-resource.example.com, scope: balance, act: agent1). The invest MCP server uses an API key from the gateway for its API.",
    "edges": [
     17,
     18,
     3,
     5,
     4
    ]
   },
   {
    "title": "Sensitive action: HITL",
    "what": "Guardrails ask Authorize to determine whether a human must approve (\"determine HITL\") and send a push to the user; the approval comes back through the webhook as \"register/complete\" and the orchestration returns to the agent.",
    "edges": [
     20,
     22,
     21,
     8
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "bedrock-new-master-exact",
  "title": "Bedrock New Master (from the Lucid .vsdx)",
  "lede": "Page \"Bedrock_New_Master\": the A2A worker flow with AWS Bedrock Agent Core in the gateway slot, Fine Grained Authorization (AWS), and two extra boxes for AI Governance and a future Priv Ping Vault.",
  "groups": {
   "actor": {
    "label": "Actors",
    "color": "blue"
   },
   "agent": {
    "label": "Agent runtime",
    "color": "red"
   },
   "token": {
    "label": "Token service",
    "color": "amber"
   },
   "authz": {
    "label": "Authorization",
    "color": "green"
   },
   "gateway": {
    "label": "MCP gateway",
    "color": "red"
   },
   "resource": {
    "label": "Resources",
    "color": "dark"
   },
   "grey": {
    "label": "Session, inputs, governance",
    "color": "grey"
   },
   "note": {
    "label": "Token and payload notes",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "agent1",
    "group": "agent",
    "label": "agent1",
    "sub": [
     "JSON-RPC interface",
     "Inputs: Prompts",
     "Inputs: PKI Creds"
    ],
    "x": 330,
    "y": 650
   },
   {
    "id": "api",
    "group": "resource",
    "label": "API",
    "sub": [
     "investments-resource.example.com",
     "/balance",
     "API key: 12345"
    ],
    "x": 1350,
    "y": 580
   },
   {
    "id": "hitl-ui",
    "group": "actor",
    "label": "HITL UI",
    "sub": [],
    "x": 100,
    "y": 410
   },
   {
    "id": "oauth-rs",
    "group": "resource",
    "label": "OAuth RS",
    "sub": [
     "aud: olb-resource.example.com",
     "/balance - scope: balance",
     "/transfer - scope: transfer"
    ],
    "x": 1160,
    "y": 420
   },
   {
    "id": "idp",
    "group": "token",
    "label": "PingOne / PF / AIC",
    "sub": [
     "AIC"
    ],
    "x": 30,
    "y": 80
   },
   {
    "id": "session",
    "group": "grey",
    "label": "Ping Session",
    "sub": [],
    "x": 20,
    "y": 0
   },
   {
    "id": "mcp-invest",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-invest.example.com"
    ],
    "x": 1100,
    "y": 570
   },
   {
    "id": "authorize",
    "group": "authz",
    "label": "Fine Grained Authorization (AWS)",
    "sub": [
     "Token introspect",
     "Fine grained AZ",
     "OpenAPI"
    ],
    "x": 750,
    "y": 210
   },
   {
    "id": "llm",
    "group": "agent",
    "label": "LLM",
    "sub": [],
    "x": 340,
    "y": 790
   },
   {
    "id": "ats-agent",
    "group": "token",
    "label": "Agent",
    "sub": [],
    "x": 360,
    "y": 440
   },
   {
    "id": "token-exc",
    "group": "token",
    "label": "Token Exc",
    "sub": [],
    "x": 530,
    "y": 340
   },
   {
    "id": "introspect",
    "group": "token",
    "label": "Introspect",
    "sub": [],
    "x": 730,
    "y": 110
   },
   {
    "id": "token",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: agent1",
     "aud: agent1.example.com"
    ],
    "x": 0,
    "y": 921
   },
   {
    "id": "token-2",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-gw.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 300,
    "y": 921
   },
   {
    "id": "token-3",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: mcp-gw",
     "aud: mcp-gw.example.com"
    ],
    "x": 600,
    "y": 921
   },
   {
    "id": "client-cred",
    "group": "token",
    "label": "Client Cred",
    "sub": [],
    "x": 510,
    "y": 220
   },
   {
    "id": "mcp-olb",
    "group": "resource",
    "label": "MCP",
    "sub": [
     "mcp-olb.example.com"
    ],
    "x": 1080,
    "y": 330
   },
   {
    "id": "gateway",
    "group": "gateway",
    "label": "AWS Bedrock Agent Core",
    "sub": [
     "Route: mcp-olb.example.com/mcp",
     "scopes: balance, transfer",
     "Route: mcp-invest.example.com/mcp",
     "scope: balance"
    ],
    "x": 710,
    "y": 450
   },
   {
    "id": "protected-resource-metadata-",
    "group": "note",
    "label": "Protected-resource metadata: mcp-invest (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-invest.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\"]}"
    ],
    "x": 900,
    "y": 921
   },
   {
    "id": "protected-resource-metadata--2",
    "group": "note",
    "label": "Protected-resource metadata: mcp-olb (RFC 9728)",
    "sub": [
     "{\"resource\":",
     "\"mcp-olb.example.com/mcp\",",
     "\"authorization_servers\":",
     "[\"auth.example.com/as\"],",
     "\"scopes_supported\":[\"balance\",\"transfer\"]}"
    ],
    "x": 1200,
    "y": 921
   },
   {
    "id": "token-4",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: mcp-olb.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 1500,
    "y": 921
   },
   {
    "id": "user",
    "group": "actor",
    "label": "User",
    "sub": [],
    "x": 0,
    "y": 310
   },
   {
    "id": "tools-list-result",
    "group": "note",
    "label": "tools/list result",
    "sub": [
     "result.tools:",
     "get_balance(account_id)",
     "transfer_funds(source_account,",
     "destination_account, amount,",
     "currency)",
     "(an inputSchema for each tool)"
    ],
    "x": 1800,
    "y": 921
   },
   {
    "id": "tools-list-request",
    "group": "note",
    "label": "tools/list request",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":1,",
     "\"method\":\"tools/list\"}"
    ],
    "x": 2100,
    "y": 921
   },
   {
    "id": "tools-call-request",
    "group": "note",
    "label": "tools/call request",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":2,",
     "\"method\":\"tools/call\",\"params\":{",
     "\"name\":\"get_balance\",",
     "\"arguments\":",
     "{\"account_id\":\"12345\"}}}"
    ],
    "x": 2400,
    "y": 921
   },
   {
    "id": "tools-call-result",
    "group": "note",
    "label": "tools/call result",
    "sub": [
     "{\"jsonrpc\":\"2.0\",\"id\":2,\"result\":",
     "{\"content\":[{\"type\":\"text\",\"text\":",
     "\"The current balance for",
     "account 12345 is $1,250.42.\"}],",
     "\"isError\":false}}"
    ],
    "x": 2700,
    "y": 921
   },
   {
    "id": "token-5",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user1",
     "aud: olb-resource.example.com",
     "scope: balance",
     "act: agent1"
    ],
    "x": 0,
    "y": 1109
   },
   {
    "id": "token-6",
    "group": "note",
    "label": "Token",
    "sub": [
     "client_id: mcp-olb",
     "aud: mcp-olb.example.com"
    ],
    "x": 300,
    "y": 1109
   },
   {
    "id": "guardrails",
    "group": "agent",
    "label": "Guardrails",
    "sub": [
     "401/403 handler"
    ],
    "x": 460,
    "y": 560
   },
   {
    "id": "orchestration",
    "group": "token",
    "label": "Orchestration",
    "sub": [
     "Return",
     "Push"
    ],
    "x": 260,
    "y": 280
   },
   {
    "id": "webhook",
    "group": "actor",
    "label": "Webhook response",
    "sub": [],
    "x": 100,
    "y": 490
   },
   {
    "id": "token-7",
    "group": "note",
    "label": "Token",
    "sub": [
     "sub: user2",
     "aud: agent",
     "scope: consent, balance, transfer",
     "may_act: agent1"
    ],
    "x": 600,
    "y": 1109
   },
   {
    "id": "governance",
    "group": "grey",
    "label": "AI Governance",
    "sub": [],
    "x": 570,
    "y": 690
   },
   {
    "id": "vault",
    "group": "grey",
    "label": "Priv Ping Vault (Future)",
    "sub": [],
    "x": 830,
    "y": 630
   },
   {
    "id": "process",
    "group": "token",
    "label": "Process",
    "sub": [],
    "x": 250,
    "y": 180
   }
  ],
  "edges": [
   {
    "source": "hitl-ui",
    "target": "oauth-rs",
    "label": "Token"
   },
   {
    "source": "hitl-ui",
    "target": "api",
    "label": "API key"
   },
   {
    "source": "session",
    "target": "idp"
   },
   {
    "source": "mcp-olb",
    "target": "oauth-rs"
   },
   {
    "source": "mcp-invest",
    "target": "api"
   },
   {
    "source": "gateway",
    "target": "mcp-invest",
    "label": "API key 12345"
   },
   {
    "source": "agent1",
    "target": "gateway"
   },
   {
    "source": "agent1",
    "target": "llm"
   },
   {
    "source": "hitl-ui",
    "target": "agent1",
    "label": "register/complete"
   },
   {
    "source": "agent1",
    "target": "token-exc"
   },
   {
    "source": "agent1",
    "target": "ats-agent"
   },
   {
    "source": "gateway",
    "target": "token-exc"
   },
   {
    "source": "gateway",
    "target": "client-cred"
   },
   {
    "source": "gateway",
    "target": "authorize"
   },
   {
    "source": "gateway",
    "target": "mcp-olb"
   },
   {
    "source": "authorize",
    "target": "introspect"
   },
   {
    "source": "user",
    "target": "hitl-ui"
   },
   {
    "source": "mcp-olb",
    "target": "token-exc"
   },
   {
    "source": "mcp-olb",
    "target": "client-cred"
   },
   {
    "source": "authorize",
    "target": "mcp-olb"
   },
   {
    "source": "guardrails",
    "target": "authorize",
    "label": "determine HITL"
   },
   {
    "source": "webhook",
    "target": "orchestration"
   },
   {
    "source": "guardrails",
    "target": "orchestration",
    "label": "HITL send push"
   },
   {
    "source": "gateway",
    "target": "governance"
   },
   {
    "source": "gateway",
    "target": "vault"
   },
   {
    "source": "orchestration",
    "target": "process"
   }
  ],
  "steps": [
   {
    "title": "Agent identity",
    "what": "The agent runtime (JSON-RPC) authenticates to the token service as its own client (it holds the Prompts and PKI credentials listed in its box), and gets an agent token (client_id: agent1).",
    "edges": [
     10
    ]
   },
   {
    "title": "User signs in",
    "what": "The user reaches the HITL UI and signs in through Ping Session; the subject (human) token carries sub: user1, aud: agent, may_act: agent1.",
    "edges": [
     16,
     2,
     0,
     1
    ]
   },
   {
    "title": "Tool list",
    "what": "The agent asks the gateway for the tool list with its own token. Authorize is asked what this agent may see and returns the allowed tools (Fine-grained AZ).",
    "edges": [
     6,
     13
    ]
   },
   {
    "title": "Tool call without a user token",
    "what": "The agent calls a tool in agent context only. Authorize denies it: there is no subject (human) token. The gateway answers with a JSON-RPC unauthorized error and the required scope, and the 401/403 handler in the agent reacts.",
    "edges": [
     6,
     13,
     7
    ]
   },
   {
    "title": "Token exchange (RFC 8693)",
    "what": "The agent exchanges its own token (actor) plus the user token (subject, may_act: agent1) for a TX token: sub: user1, act: agent1, aud: mcp-gw, scope: balance.",
    "edges": [
     9,
     10
    ]
   },
   {
    "title": "Gateway authorizes the TX token",
    "what": "The gateway sends the TX token and the tool call to PingAuthorize, which introspects it and checks scope, aud and the call details against policy.",
    "edges": [
     13,
     15
    ]
   },
   {
    "title": "Gateway exchanges for the MCP server",
    "what": "The gateway does its own token exchange (client credentials of mcp-gw) for a token whose aud is the MCP server, and forwards the call.",
    "edges": [
     11,
     12,
     14,
     19
    ]
   },
   {
    "title": "MCP exchanges for the resource",
    "what": "The MCP server exchanges again for the resource server (aud: olb-resource.example.com, scope: balance, act: agent1). The invest MCP server uses an API key from the gateway for its API.",
    "edges": [
     17,
     18,
     3,
     5,
     4
    ]
   },
   {
    "title": "Sensitive action: HITL",
    "what": "Guardrails ask Authorize to determine whether a human must approve (\"determine HITL\") and send a push to the user; the approval comes back through the webhook as \"register/complete\" and the orchestration returns to the agent.",
    "edges": [
     20,
     22,
     21,
     8
    ]
   },
   {
    "title": "Governance and vault",
    "what": "The Bedrock Agent Core slot also feeds AI Governance and a future Priv Ping Vault, and the orchestration hands work to a Process step.",
    "edges": [
     23,
     24,
     25
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "aws-agentcore-exact",
  "title": "AWS Bedrock Agent Core with Ping (from the Lucid .vsdx)",
  "lede": "Page \"AWS_Agentcore\": a user signs in with OIDC at Ping, Agent Core Runtime checks the JWT with Ping's JWKS, Agent Core Identity asks Ping for a token exchange, and Agent Core Gateway fronts MCP 1 and MCP 2.",
  "groups": {
   "actor": {
    "label": "User",
    "color": "blue"
   },
   "ping": {
    "label": "Ping",
    "color": "amber"
   },
   "runtime": {
    "label": "AgentCore Runtime",
    "color": "green"
   },
   "identity": {
    "label": "AgentCore Identity",
    "color": "red"
   },
   "gateway": {
    "label": "AgentCore Gateway",
    "color": "dark"
   },
   "resource": {
    "label": "MCP servers",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "user",
    "group": "actor",
    "label": "User",
    "sub": [],
    "x": 0,
    "y": 420
   },
   {
    "id": "ping",
    "group": "ping",
    "label": "Ping",
    "sub": [
     "OIDC sign-in, issues the JWT"
    ],
    "x": 420,
    "y": 0
   },
   {
    "id": "jwks",
    "group": "ping",
    "label": "JWKS",
    "sub": [],
    "x": 330,
    "y": 170
   },
   {
    "id": "ping-tx",
    "group": "ping",
    "label": "Token Exchange",
    "sub": [],
    "x": 700,
    "y": 170
   },
   {
    "id": "inbound",
    "group": "runtime",
    "label": "Inbound Auth",
    "sub": [
     "Agent Runtime"
    ],
    "x": 330,
    "y": 420
   },
   {
    "id": "agent",
    "group": "runtime",
    "label": "Agent",
    "sub": [
     "Agent Code",
     "get_resource_oauth2_token()"
    ],
    "x": 700,
    "y": 420
   },
   {
    "id": "outbound",
    "group": "identity",
    "label": "Outbound Auth",
    "sub": [
     "Identity"
    ],
    "x": 700,
    "y": 300
   },
   {
    "id": "gateway",
    "group": "gateway",
    "label": "Gateway",
    "sub": [
     "Inbound Auth",
     "tools: mcp1_tool1, mcp2_tool1"
    ],
    "x": 1040,
    "y": 420
   },
   {
    "id": "mcp1",
    "group": "resource",
    "label": "MCP 1",
    "sub": [],
    "x": 1380,
    "y": 340
   },
   {
    "id": "mcp2",
    "group": "resource",
    "label": "MCP 2",
    "sub": [],
    "x": 1380,
    "y": 500
   }
  ],
  "edges": [
   {
    "source": "user",
    "target": "inbound",
    "label": "JWT"
   },
   {
    "source": "user",
    "target": "ping",
    "label": "OIDC"
   },
   {
    "source": "inbound",
    "target": "jwks"
   },
   {
    "source": "agent",
    "target": "outbound",
    "label": "get_resource_oauth2_token()"
   },
   {
    "source": "outbound",
    "target": "ping-tx"
   },
   {
    "source": "outbound",
    "target": "agent"
   },
   {
    "source": "agent",
    "target": "gateway"
   },
   {
    "source": "gateway",
    "target": "mcp1"
   },
   {
    "source": "gateway",
    "target": "mcp2"
   }
  ],
  "steps": [
   {
    "title": "User signs in",
    "what": "The user signs in with OIDC at Ping.",
    "edges": [
     1
    ]
   },
   {
    "title": "JWT checked at the runtime",
    "what": "The user presents the JWT to Inbound Auth on the Agent Runtime, which checks it with Ping's JWKS.",
    "edges": [
     0,
     2
    ]
   },
   {
    "title": "Agent asks for an outbound token",
    "what": "The agent code calls get_resource_oauth2_token(); Outbound Auth on Agent Core Identity does a token exchange at Ping and hands the token back to the agent.",
    "edges": [
     3,
     4,
     5
    ]
   },
   {
    "title": "Agent calls the gateway",
    "what": "The agent calls the Agent Core Gateway, which has its own Inbound Auth.",
    "edges": [
     6
    ]
   },
   {
    "title": "Gateway reaches the MCP servers",
    "what": "The gateway exposes the tools of both MCP servers (mcp1_tool1, mcp2_tool1).",
    "edges": [
     7,
     8
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "mcp-gateway-comparison-exact",
  "title": "Privilege MCP Gateway vs PingGateway MCP Security Gateway (from the Lucid .vsdx)",
  "lede": "Page \"MCP gateway comparison\": a field-story decision tree. Anchor the story on the control problem the customer is trying to solve, then follow one of two branches to a recommendation.",
  "groups": {
   "start": {
    "label": "Start / End",
    "color": "grey"
   },
   "decision": {
    "label": "Decision",
    "color": "red"
   },
   "privilege": {
    "label": "Privilege MCP Gateway",
    "color": "blue"
   },
   "pinggw": {
    "label": "PingGateway MCP Security Gateway",
    "color": "amber"
   },
   "note": {
    "label": "Note",
    "color": "dark"
   }
  },
  "nodes": [
   {
    "id": "start",
    "group": "start",
    "label": "Start",
    "sub": [],
    "x": 0,
    "y": 280
   },
   {
    "id": "how-to-choose",
    "group": "decision",
    "label": "How to choose:",
    "sub": [
     "What control problem is the customer trying to solve?"
    ],
    "x": 50,
    "y": 150
   },
   {
    "id": "control-problem",
    "group": "decision",
    "label": "Control problem:",
    "sub": [
     "MCP access governance",
     "or downstream token mediation?"
    ],
    "x": 220,
    "y": 270
   },
   {
    "id": "p-core",
    "group": "privilege",
    "label": "P: Core need",
    "sub": [
     "\"MCP access governance\""
    ],
    "x": 390,
    "y": 160
   },
   {
    "id": "p-governs",
    "group": "privilege",
    "label": "P2: Governs",
    "sub": [
     "which MCP servers, tools, prompts, resources"
    ],
    "x": 620,
    "y": 150
   },
   {
    "id": "p-controls",
    "group": "privilege",
    "label": "P3: Controls",
    "sub": [
     "approvals • time-bound access • audit trail"
    ],
    "x": 930,
    "y": 200
   },
   {
    "id": "p-strong",
    "group": "privilege",
    "label": "P4: Strong for",
    "sub": [
     "workforce assistants & 3rd-party MCP clients"
    ],
    "x": 1080,
    "y": 70
   },
   {
    "id": "p-benefit",
    "group": "privilege",
    "label": "P5: Benefit",
    "sub": [
     "Clean, scalable control point",
     "(no complex downstream token mediation)"
    ],
    "x": 1280,
    "y": 210
   },
   {
    "id": "p-end",
    "group": "privilege",
    "label": "End — Privilege MCP Gateway recommended",
    "sub": [],
    "x": 1470,
    "y": 90
   },
   {
    "id": "g-core",
    "group": "pinggw",
    "label": "G: Core need",
    "sub": [
     "\"downstream token mediation +",
     "resource-server enforcement\""
    ],
    "x": 250,
    "y": 400
   },
   {
    "id": "g-includes",
    "group": "pinggw",
    "label": "G2: Includes",
    "sub": [
     "validation • introspect • audience/resource handling",
     "transformation • delegated identity • programmable enforcement"
    ],
    "x": 530,
    "y": 390
   },
   {
    "id": "g-fit",
    "group": "pinggw",
    "label": "G3: Best-fit use cases",
    "sub": [
     "complex trust boundaries • multi-hop chains",
     "token exchange & transaction-token patterns",
     "rich identity propagation / provenance"
    ],
    "x": 830,
    "y": 370
   },
   {
    "id": "g-example",
    "group": "pinggw",
    "label": "G4: Example",
    "sub": [
     "Cases like a named enterprise customer — beyond basic MCP governance"
    ],
    "x": 1140,
    "y": 450
   },
   {
    "id": "g-end",
    "group": "pinggw",
    "label": "End — PingGateway MCP Security Gateway recommended",
    "sub": [],
    "x": 1230,
    "y": 360
   },
   {
    "id": "end",
    "group": "start",
    "label": "End",
    "sub": [],
    "x": 1600,
    "y": 190
   },
   {
    "id": "anchor",
    "group": "note",
    "label": "Anchor the story on the control problem,",
    "sub": [
     "not on a loose \"personal assistant vs digital assistant\" split."
    ],
    "x": 70,
    "y": 0
   }
  ],
  "edges": [
   {
    "source": "start",
    "target": "how-to-choose"
   },
   {
    "source": "how-to-choose",
    "target": "control-problem"
   },
   {
    "source": "control-problem",
    "target": "p-core",
    "label": "MCP access governance"
   },
   {
    "source": "control-problem",
    "target": "g-core",
    "label": "Downstream token mediation"
   },
   {
    "source": "p-core",
    "target": "p-governs"
   },
   {
    "source": "p-governs",
    "target": "p-controls"
   },
   {
    "source": "p-controls",
    "target": "p-strong"
   },
   {
    "source": "p-strong",
    "target": "p-benefit"
   },
   {
    "source": "p-benefit",
    "target": "p-end"
   },
   {
    "source": "p-end",
    "target": "end"
   },
   {
    "source": "g-core",
    "target": "g-includes"
   },
   {
    "source": "g-includes",
    "target": "g-fit"
   },
   {
    "source": "g-fit",
    "target": "g-example"
   },
   {
    "source": "g-example",
    "target": "g-end"
   },
   {
    "source": "g-end",
    "target": "end"
   },
   {
    "source": "anchor",
    "target": "how-to-choose"
   }
  ],
  "steps": [
   {
    "title": "Start",
    "what": "Start with the question: what control problem is the customer trying to solve? Anchor the story on that, not on a loose \"personal assistant vs digital assistant\" split.",
    "edges": [
     0,
     15,
     1
    ]
   },
   {
    "title": "Privilege MCP Gateway: the need",
    "what": "If the problem is MCP access governance, the core need is governing which MCP servers, tools, prompts and resources an agent can reach.",
    "edges": [
     2,
     4
    ]
   },
   {
    "title": "Privilege MCP Gateway: the controls",
    "what": "It controls approvals, time-bound access and the audit trail, and is strong for workforce assistants and third-party MCP clients.",
    "edges": [
     5,
     6
    ]
   },
   {
    "title": "Privilege MCP Gateway: the benefit",
    "what": "The benefit is a clean, scalable control point with no complex downstream token mediation. Recommendation: Privilege MCP Gateway.",
    "edges": [
     7,
     8
    ]
   },
   {
    "title": "PingGateway MCP Security Gateway: the need",
    "what": "If the problem is downstream token mediation, the core need is mediation plus resource-server enforcement: validation, introspection, audience and resource handling, transformation, delegated identity, programmable enforcement.",
    "edges": [
     3,
     10
    ]
   },
   {
    "title": "PingGateway: best fit and example",
    "what": "Best fit: complex trust boundaries, multi-hop chains, token exchange and transaction-token patterns, rich identity propagation. Example: cases from a named enterprise customer that go beyond basic MCP governance. Recommendation: PingGateway MCP Security Gateway.",
    "edges": [
     11,
     12,
     13
    ]
   },
   {
    "title": "End",
    "what": "Both branches end at a recommendation.",
    "edges": [
     9,
     14
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "problem-statement-exact",
  "title": "Problem Statement: why token exchange? (from the Lucid .vsdx)",
  "lede": "Page \"Problem Statement\": a Digital Assistant holds a Person token and an Agent token; MCP tools must receive an MCP-server token, so the agent exchanges. The arrows other than MCP Server to API Endpoints follow the page's own step text.",
  "groups": {
   "actor": {
    "label": "Digital Assistant",
    "color": "blue"
   },
   "token": {
    "label": "Tokens",
    "color": "amber"
   },
   "resource": {
    "label": "MCP servers and API",
    "color": "dark"
   },
   "note": {
    "label": "Rules and notes",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "person-token",
    "group": "token",
    "label": "Person tokens",
    "sub": [
     "Person (Agent) token, passed to the Agent",
     "aud: agent"
    ],
    "x": 0,
    "y": 0
   },
   {
    "id": "agent-token",
    "group": "token",
    "label": "Agent token and exchanges",
    "sub": [
     "Agent authenticates to its client_id",
     "one TX token per MCP Server (aud)"
    ],
    "x": 0,
    "y": 230
   },
   {
    "id": "digital-assistant",
    "group": "actor",
    "label": "Digital Assistant",
    "sub": [
     "Person authenticates to the WebApp",
     "Chat UX asks silently for the Person (Agent) token"
    ],
    "x": 430,
    "y": 120
   },
   {
    "id": "mcp1",
    "group": "resource",
    "label": "MCP Server",
    "sub": [
     "aud: MCPServer1"
    ],
    "x": 880,
    "y": 0
   },
   {
    "id": "mcp2",
    "group": "resource",
    "label": "MCP Server",
    "sub": [
     "aud: MCPServer2"
    ],
    "x": 880,
    "y": 230
   },
   {
    "id": "api",
    "group": "resource",
    "label": "API Endpoints",
    "sub": [
     "aud: APIServer1"
    ],
    "x": 1310,
    "y": 0
   },
   {
    "id": "rules",
    "group": "note",
    "label": "Rules",
    "sub": [
     "The Agent MUST have a Person token",
     "MCP Tools MUST have an MCP Server token"
    ],
    "x": 430,
    "y": 430
   },
   {
    "id": "checks",
    "group": "note",
    "label": "What the MCP tool checks",
    "sub": [
     "The incoming token has the proper scope and aud for the MCP tools",
     "The Agent is explicit in the act claim"
    ],
    "x": 880,
    "y": 470
   },
   {
    "id": "tx-example",
    "group": "token",
    "label": "TX token (example)",
    "sub": [
     "aud: MCPServer1:3100",
     "scope: mcp:travel_tools",
     "sub: user-123",
     "act.sub: agent-client-example",
     "iss: auth.example.com/as; exp one hour after iat"
    ],
    "x": 1310,
    "y": 230
   },
   {
    "id": "why",
    "group": "note",
    "label": "Why token exchange?",
    "sub": [
     "Stops: the Agent using the Person token directly on the API server",
     "Stops: a stolen Person token sent straight to an MCP Server",
     "Stops: a Person token injected into a rogue Agent on the MCP Server",
     "Stops: a stolen Agent token sent to an MCP Server",
     "Cost: a separate Person (Agent) token, e.g. with prompt=none",
     "Cost: the Agent exchanges and holds one token per MCP Server (aud)"
    ],
    "x": 0,
    "y": 470
   }
  ],
  "edges": [
   {
    "source": "person-token",
    "target": "digital-assistant",
    "label": "passed to the Agent"
   },
   {
    "source": "agent-token",
    "target": "digital-assistant",
    "label": "client_id"
   },
   {
    "source": "digital-assistant",
    "target": "mcp1",
    "label": "TX token (aud: MCPServer1)"
   },
   {
    "source": "digital-assistant",
    "target": "mcp2",
    "label": "TX token (aud: MCPServer2)"
   },
   {
    "source": "mcp1",
    "target": "api"
   }
  ],
  "steps": [
   {
    "title": "Person signs in",
    "what": "The Person authenticates to the WebApp and the App token is returned to the App.",
    "edges": []
   },
   {
    "title": "Person (Agent) token",
    "what": "The Person opens the Chat UX; a silent request gets the Person (Agent) token, which is passed to the Agent.",
    "edges": [
     0
    ]
   },
   {
    "title": "Agent authenticates",
    "what": "The Agent authenticates with its own client_id.",
    "edges": [
     1
    ]
   },
   {
    "title": "Prompt calls a tool",
    "what": "A prompt tells the Agent to use an MCP Server tool. If the tool receives the wrong token from the Agent, a 400 comes back.",
    "edges": []
   },
   {
    "title": "Token exchange",
    "what": "The Agent exchanges for the MCP Server token (TX token) and passes it to the MCP Server, which validates aud. The tool executes and the response returns to the Agent.",
    "edges": [
     2,
     3
    ]
   },
   {
    "title": "MCP Server reaches the API",
    "what": "The MCP Server calls the API endpoints.",
    "edges": [
     4
    ]
   }
  ]
 },
 {
  "schema": "diagram-prove-lab/1",
  "id": "ref-arch-id4ai-sequence-exact",
  "title": "Reference architecture: balance check with token exchange (from the Lucid .vsdx)",
  "lede": "Page \"Ref Arch ID4AI Sequence v1\": a sequence diagram for \"Check my balance\". The export carries the ten lifelines and the captions; each message arrow is placed from where its caption sits across the lifelines, and the two unlabeled hops (web app to chatbot to agent) are inferred from the lifeline order.",
  "groups": {
   "actor": {
    "label": "User side",
    "color": "blue"
   },
   "agent": {
    "label": "Agent",
    "color": "red"
   },
   "token": {
    "label": "Ping",
    "color": "amber"
   },
   "gateway": {
    "label": "Gateway and MCP",
    "color": "dark"
   },
   "resource": {
    "label": "Resource server",
    "color": "grey"
   },
   "note": {
    "label": "Notes on the page",
    "color": "grey"
   }
  },
  "nodes": [
   {
    "id": "user",
    "group": "actor",
    "label": "User",
    "sub": [],
    "x": 0,
    "y": 250
   },
   {
    "id": "webapp",
    "group": "actor",
    "label": "Web Application",
    "sub": [],
    "x": 330,
    "y": 490
   },
   {
    "id": "chatbot",
    "group": "actor",
    "label": "Chatbot",
    "sub": [],
    "x": 650,
    "y": 250
   },
   {
    "id": "agent",
    "group": "agent",
    "label": "Agent (Digital Assistant)",
    "sub": [],
    "x": 980,
    "y": 490
   },
   {
    "id": "llm",
    "group": "agent",
    "label": "LLM",
    "sub": [],
    "x": 1300,
    "y": 250
   },
   {
    "id": "idp",
    "group": "token",
    "label": "Ping Identity IDM/IAM",
    "sub": [],
    "x": 1630,
    "y": 490
   },
   {
    "id": "gateway",
    "group": "gateway",
    "label": "Agent Gateway",
    "sub": [],
    "x": 1950,
    "y": 250
   },
   {
    "id": "authorize",
    "group": "token",
    "label": "Ping Authorize",
    "sub": [],
    "x": 2280,
    "y": 490
   },
   {
    "id": "mcp",
    "group": "gateway",
    "label": "MCP",
    "sub": [],
    "x": 2600,
    "y": 250
   },
   {
    "id": "rs",
    "group": "resource",
    "label": "Resource Server (OAuth 2.1)",
    "sub": [],
    "x": 2930,
    "y": 490
   },
   {
    "id": "n-start",
    "group": "note",
    "label": "Agent starts",
    "sub": [],
    "x": 980,
    "y": 0
   },
   {
    "id": "n-subject",
    "group": "note",
    "label": "Subject token",
    "sub": [
     "User already authenticated: obtain a scoped subject token",
     "If the user is not authenticated, an authn event is triggered first"
    ],
    "x": 330,
    "y": 740
   },
   {
    "id": "n-act",
    "group": "note",
    "label": "Agent acts on behalf of the user",
    "sub": [
     "sub=user, act=bank_agent",
     "Option: aud: mcp-olb (requires assurance that the only path to the MCP is via the gateway)"
    ],
    "x": 980,
    "y": 770
   },
   {
    "id": "n-policy",
    "group": "note",
    "label": "Gateway check",
    "sub": [
     "Validate: aud, scope: balance, tool call details vs. policy"
    ],
    "x": 2280,
    "y": 770
   },
   {
    "id": "n-rs",
    "group": "note",
    "label": "Resource server check",
    "sub": [
     "Validate: aud=resource-server, scope: balance, act: bank_agent"
    ],
    "x": 2930,
    "y": 770
   }
  ],
  "edges": [
   {
    "source": "agent",
    "target": "gateway",
    "label": "1 · Request tool list"
   },
   {
    "source": "gateway",
    "target": "authorize",
    "label": "2 · Fine-grained policy evaluation: return allowed tools for this agent"
   },
   {
    "source": "user",
    "target": "webapp",
    "label": "3 · User makes request \"Check my balance\""
   },
   {
    "source": "webapp",
    "target": "chatbot",
    "label": "4 · request"
   },
   {
    "source": "chatbot",
    "target": "agent",
    "label": "5 · request"
   },
   {
    "source": "agent",
    "target": "gateway",
    "label": "6 · Tool call: agent context only (no user subject token)"
   },
   {
    "source": "webapp",
    "target": "idp",
    "label": "7 · Obtain scoped subject token"
   },
   {
    "source": "agent",
    "target": "idp",
    "label": "8 · Exchange token for Agent Gateway (RFC 8693)"
   },
   {
    "source": "gateway",
    "target": "authorize",
    "label": "9 · Gateway authorizes TX token + tool call"
   },
   {
    "source": "gateway",
    "target": "idp",
    "label": "10 · Exchange token for MCP"
   },
   {
    "source": "mcp",
    "target": "idp",
    "label": "11 · Exchange token for Resource Server"
   },
   {
    "source": "mcp",
    "target": "rs",
    "label": "12 · Call the Resource Server with the exchanged token",
    "dashed": true
   }
  ],
  "steps": [
   {
    "title": "Tool list",
    "what": "The agent starts and asks the gateway for the tool list; the gateway asks Ping Authorize for a fine-grained evaluation and returns only the tools this agent may use.",
    "edges": [
     0,
     1
    ]
   },
   {
    "title": "User asks",
    "what": "The user asks \"Check my balance\" in the web application; the request travels through the chatbot to the agent.",
    "edges": [
     2,
     3,
     4
    ]
   },
   {
    "title": "Tool call, agent context only",
    "what": "The agent calls the tool in agent context only: there is no user subject token yet.",
    "edges": [
     5
    ]
   },
   {
    "title": "Subject token",
    "what": "The user is already authenticated, so a scoped subject token is obtained; if not, an authentication event happens first.",
    "edges": [
     6
    ]
   },
   {
    "title": "Exchange for the Agent Gateway",
    "what": "The agent exchanges its token for one the Agent Gateway accepts (RFC 8693): sub=user, act=bank_agent, so the agent acts on behalf of the user.",
    "edges": [
     7
    ]
   },
   {
    "title": "Gateway authorizes",
    "what": "The gateway sends the TX token and the tool call to Ping Authorize: aud, scope: balance and the call details are checked against policy.",
    "edges": [
     8
    ]
   },
   {
    "title": "Exchange for the MCP",
    "what": "The gateway exchanges the token for one for the MCP.",
    "edges": [
     9
    ]
   },
   {
    "title": "Exchange for the Resource Server",
    "what": "The MCP exchanges for the Resource Server: the resource checks aud=resource-server, scope: balance and act: bank_agent.",
    "edges": [
     10,
     11
    ]
   }
  ]
 }
];
