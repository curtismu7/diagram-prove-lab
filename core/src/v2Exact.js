// V2 Agent — GW/Authorize, exact geometry from the Lucid .vsdx export. See docs/v2-agent-gw-authorize-exact.drawio.
export const V2_EXACT = {
 "schema": "diagram-prove-lab/1",
 "id": "v2-agent-gw-authorize-exact",
 "title": "V2 Agent — GW/Authorize (exact from the Lucid .vsdx)",
 "lede": "Rebuilt from the Lucid vsdx export with the original geometry and colors. Adds the three edges the earlier rebuild missed (agent1→Token Exc, agent1→Agent, MCP→Token Exc/Client Cred) and the standalone Introspect box. Blue/gold dashed = token overlay (1 Human, 2 Agent, 3 TX, 4/5 MCP per-aud).",
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
  "gateway": {
   "label": "MCP gateway",
   "color": "red"
  },
  "resource": {
   "label": "Resources",
   "color": "dark"
  },
  "grey": {
   "label": "Session / labels",
   "color": "grey"
  },
  "white": {
   "label": "Routes",
   "color": "grey"
  },
  "note": {
   "label": "Token notes",
   "color": "grey"
  }
 },
 "nodes": [
  {
   "id": "user",
   "group": "actor",
   "label": "User",
   "sub": [],
   "x": 440,
   "y": 797
  },
  {
   "id": "pingsess",
   "group": "grey",
   "label": "Ping Session",
   "sub": [],
   "x": 0,
   "y": 0
  },
  {
   "id": "olb",
   "group": "actor",
   "label": "OLB",
   "sub": [
    "Application"
   ],
   "x": 880,
   "y": 744
  },
  {
   "id": "chatbot",
   "group": "actor",
   "label": "chatbot",
   "sub": [],
   "x": 1320,
   "y": 751
  },
  {
   "id": "shadow",
   "group": "agent",
   "label": "Shadow IT",
   "sub": [],
   "x": 0,
   "y": 91
  },
  {
   "id": "agent1",
   "group": "agent",
   "label": "agent1",
   "sub": [],
   "x": 0,
   "y": 1835
  },
  {
   "id": "llm",
   "group": "agent",
   "label": "LLM",
   "sub": [],
   "x": 440,
   "y": 1835
  },
  {
   "id": "ats",
   "group": "token",
   "label": "Agentic Token Service",
   "sub": [],
   "x": 440,
   "y": 706
  },
  {
   "id": "orch",
   "group": "token",
   "label": "Orchrestration",
   "sub": [],
   "x": 0,
   "y": 182
  },
  {
   "id": "agtsvc",
   "group": "token",
   "label": "Agent",
   "sub": [],
   "x": 440,
   "y": 1926
  },
  {
   "id": "texc",
   "group": "token",
   "label": "Token Exc",
   "sub": [],
   "x": 1320,
   "y": 1835
  },
  {
   "id": "ccred",
   "group": "token",
   "label": "Client Cred",
   "sub": [],
   "x": 1320,
   "y": 2017
  },
  {
   "id": "introspect",
   "group": "token",
   "label": "Introspect",
   "sub": [],
   "x": 1320,
   "y": 1653
  },
  {
   "id": "authz",
   "group": "token",
   "label": "Authorization",
   "sub": [],
   "x": 880,
   "y": 1744
  },
  {
   "id": "gw",
   "group": "gateway",
   "label": "Agent Gateway",
   "sub": [],
   "x": 440,
   "y": 1744
  },
  {
   "id": "route1",
   "group": "white",
   "label": "Route:",
   "sub": [
    "mcp-olb.example.com/mcp"
   ],
   "x": 0,
   "y": 273
  },
  {
   "id": "route2",
   "group": "white",
   "label": "Route:",
   "sub": [
    "mcp-invest.example.com/mcp"
   ],
   "x": 0,
   "y": 379
  },
  {
   "id": "mcp_olb",
   "group": "resource",
   "label": "MCP",
   "sub": [],
   "x": 880,
   "y": 1835
  },
  {
   "id": "mcp_inv",
   "group": "resource",
   "label": "MCP",
   "sub": [],
   "x": 880,
   "y": 1926
  },
  {
   "id": "mcpolb_lbl",
   "group": "grey",
   "label": "mcp-olb.example.com",
   "sub": [],
   "x": 0,
   "y": 485
  },
  {
   "id": "mcpinv_lbl",
   "group": "grey",
   "label": "mcp-invest.example.com",
   "sub": [],
   "x": 0,
   "y": 576
  },
  {
   "id": "rs",
   "group": "resource",
   "label": "RS",
   "sub": [],
   "x": 0,
   "y": 2168
  },
  {
   "id": "api",
   "group": "resource",
   "label": "API",
   "sub": [],
   "x": 0,
   "y": 2259
  },
  {
   "id": "olbres",
   "group": "note",
   "label": "aud: olb-resource.example.com",
   "sub": [
    "/balance - scope: balance",
    "/transfer - scope: transfer"
   ],
   "x": 0,
   "y": 667
  },
  {
   "id": "invtok",
   "group": "note",
   "label": "investments-resource.example.com",
   "sub": [
    "/balance",
    "API key: 12345"
   ],
   "x": 0,
   "y": 805
  },
  {
   "id": "restok",
   "group": "note",
   "label": "Token:",
   "sub": [
    "sub: user1",
    "aud: olb-resource.example.com",
    "scope: balance transfer"
   ],
   "x": 0,
   "y": 943
  },
  {
   "id": "moltok",
   "group": "note",
   "label": "Token:",
   "sub": [
    "client_id: mcp-olb",
    "aud: mcp-olb.example.com"
   ],
   "x": 0,
   "y": 1079
  },
  {
   "id": "htok",
   "group": "note",
   "label": "Human token:",
   "sub": [
    "sub: user1",
    "aud: agent1.example.com",
    "scope: agent1"
   ],
   "x": 0,
   "y": 1200
  },
  {
   "id": "agttok",
   "group": "note",
   "label": "Agent token:",
   "sub": [
    "client_id: agent1",
    "aud: agent1.example.com"
   ],
   "x": 0,
   "y": 1336
  },
  {
   "id": "txtok",
   "group": "note",
   "label": "TX Token:",
   "sub": [
    "sub: user1",
    "aud: <gateway or resource aud>",
    "scope: mcp"
   ],
   "x": 0,
   "y": 1457
  },
  {
   "id": "apigw1",
   "group": "resource",
   "label": "API Gateway",
   "sub": [],
   "x": 1320,
   "y": 1744
  },
  {
   "id": "apigw2",
   "group": "resource",
   "label": "API Gateway",
   "sub": [],
   "x": 1320,
   "y": 1926
  }
 ],
 "edges": [
  {
   "source": "pingsess",
   "target": "ats",
   "label": "User Authentication"
  },
  {
   "source": "chatbot",
   "target": "agent1",
   "label": "Request"
  },
  {
   "source": "user",
   "target": "olb",
   "label": "User request"
  },
  {
   "source": "olb",
   "target": "chatbot",
   "label": "call"
  },
  {
   "source": "agent1",
   "target": "gw",
   "label": "JSON-RPC request"
  },
  {
   "source": "agent1",
   "target": "llm",
   "label": "call"
  },
  {
   "source": "agent1",
   "target": "texc",
   "label": "call"
  },
  {
   "source": "agent1",
   "target": "agtsvc",
   "label": "call"
  },
  {
   "source": "ats",
   "target": "authz",
   "label": "call"
  },
  {
   "source": "authz",
   "target": "introspect",
   "label": "Introspect token"
  },
  {
   "source": "gw",
   "target": "mcp_olb",
   "label": "Forward tool call"
  },
  {
   "source": "gw",
   "target": "mcp_inv",
   "label": "Request"
  },
  {
   "source": "gw",
   "target": "authz",
   "label": "Authorization check"
  },
  {
   "source": "mcp_olb",
   "target": "texc",
   "label": "Request"
  },
  {
   "source": "mcp_olb",
   "target": "ccred",
   "label": "Request"
  },
  {
   "source": "mcp_olb",
   "target": "apigw1",
   "label": "Request"
  },
  {
   "source": "apigw1",
   "target": "rs",
   "label": "Allowed call"
  },
  {
   "source": "mcp_inv",
   "target": "apigw2",
   "label": "Request · API key (via vault)"
  },
  {
   "source": "apigw2",
   "target": "api",
   "label": "Allowed call"
  },
  {
   "source": "pingsess",
   "target": "user",
   "label": "1 · Human token"
  },
  {
   "source": "ats",
   "target": "agent1",
   "label": "2 · Agent token"
  },
  {
   "source": "agent1",
   "target": "gw",
   "label": "3 · TX token (sub=user1, act=agent1)"
  },
  {
   "source": "gw",
   "target": "mcp_olb",
   "label": "4 · MCP token (aud: mcp-olb)"
  },
  {
   "source": "gw",
   "target": "mcp_inv",
   "label": "5 · MCP token (aud: mcp-invest)"
  }
 ],
 "steps": [
  {
   "title": "Sign-in",
   "what": "User authenticates; user token issued. Validated live (pipeline \"Sign-in sub demouser\").",
   "edges": [
    0,
    3
   ]
  },
  {
   "title": "Agent token",
   "what": "agent1 authenticates with its own client (client_credentials). Validated live.",
   "edges": [
    3
   ]
  },
  {
   "title": "Token exchange",
   "what": "RFC 8693: user token + agent token → TX token (sub=user1, act=agent1, aud/scope narrowed). Validated live.",
   "edges": [
    5,
    6
   ]
  },
  {
   "title": "Gateway validation",
   "what": "Agent Gateway forwards per-route MCP tokens; Authorization check + Introspect. Validated live (introspection valid).",
   "edges": [
    7,
    8,
    9,
    10,
    11,
    12
   ]
  },
  {
   "title": "MCP → ATS token legs",
   "what": "MCP pulls from Token Exc / Client Cred — the edges the earlier rebuild missed, restored from the vsdx.",
   "edges": [
    13,
    14
   ]
  },
  {
   "title": "Downstream",
   "what": "MCP → API Gateway → RS/API; API key via vault. Validated live (real course data returned).",
   "edges": [
    15,
    16,
    17,
    18
   ]
  }
 ]
};
