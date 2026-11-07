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
   "x": 0,
   "y": 400
  },
  {
   "id": "pingsess",
   "group": "grey",
   "label": "Ping Session",
   "sub": [],
   "x": 170,
   "y": 400
  },
  {
   "id": "olb",
   "group": "actor",
   "label": "OLB",
   "sub": [
    "Application"
   ],
   "x": 340,
   "y": 330
  },
  {
   "id": "chatbot",
   "group": "actor",
   "label": "chatbot",
   "sub": [],
   "x": 340,
   "y": 470
  },
  {
   "id": "shadow",
   "group": "agent",
   "label": "Shadow IT",
   "sub": [],
   "x": 560,
   "y": 330
  },
  {
   "id": "agent1",
   "group": "agent",
   "label": "agent1",
   "sub": [],
   "x": 610,
   "y": 400
  },
  {
   "id": "llm",
   "group": "agent",
   "label": "LLM",
   "sub": [],
   "x": 610,
   "y": 560
  },
  {
   "id": "ats",
   "group": "token",
   "label": "Agentic Token Service",
   "sub": [],
   "x": 620,
   "y": 40
  },
  {
   "id": "orch",
   "group": "token",
   "label": "Orchrestration",
   "sub": [],
   "x": 625,
   "y": -30
  },
  {
   "id": "agtsvc",
   "group": "token",
   "label": "Agent",
   "sub": [],
   "x": 820,
   "y": -30
  },
  {
   "id": "texc",
   "group": "token",
   "label": "Token Exc",
   "sub": [],
   "x": 1030,
   "y": -30
  },
  {
   "id": "ccred",
   "group": "token",
   "label": "Client Cred",
   "sub": [],
   "x": 1260,
   "y": -30
  },
  {
   "id": "introspect",
   "group": "token",
   "label": "Introspect",
   "sub": [],
   "x": 1420,
   "y": -100
  },
  {
   "id": "authz",
   "group": "token",
   "label": "Authorization",
   "sub": [],
   "x": 1560,
   "y": -30
  },
  {
   "id": "gw",
   "group": "gateway",
   "label": "Agent Gateway",
   "sub": [],
   "x": 900,
   "y": 390
  },
  {
   "id": "route1",
   "group": "white",
   "label": "Route:",
   "sub": [
    "mcp-olb.example.com/mcp"
   ],
   "x": 915,
   "y": 450
  },
  {
   "id": "route2",
   "group": "white",
   "label": "Route:",
   "sub": [
    "mcp-invest.example.com/mcp"
   ],
   "x": 915,
   "y": 530
  },
  {
   "id": "mcp_olb",
   "group": "resource",
   "label": "MCP",
   "sub": [],
   "x": 1150,
   "y": 350
  },
  {
   "id": "mcp_inv",
   "group": "resource",
   "label": "MCP",
   "sub": [],
   "x": 1150,
   "y": 520
  },
  {
   "id": "mcpolb_lbl",
   "group": "grey",
   "label": "mcp-olb.example.com",
   "sub": [],
   "x": 1150,
   "y": 300
  },
  {
   "id": "mcpinv_lbl",
   "group": "grey",
   "label": "mcp-invest.example.com",
   "sub": [],
   "x": 1150,
   "y": 590
  },
  {
   "id": "rs",
   "group": "resource",
   "label": "RS",
   "sub": [],
   "x": 1580,
   "y": 350
  },
  {
   "id": "api",
   "group": "resource",
   "label": "API",
   "sub": [],
   "x": 1580,
   "y": 520
  },
  {
   "id": "olbres",
   "group": "note",
   "label": "aud: olb-resource.example.com",
   "sub": [
    "/balance - scope: balance",
    "/transfer - scope: transfer"
   ],
   "x": 1250,
   "y": 150
  },
  {
   "id": "invtok",
   "group": "note",
   "label": "investments-resource.example.com",
   "sub": [
    "/balance",
    "API key: 12345"
   ],
   "x": 1360,
   "y": 610
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
   "x": 905,
   "y": 680
  },
  {
   "id": "moltok",
   "group": "note",
   "label": "Token:",
   "sub": [
    "client_id: mcp-olb",
    "aud: mcp-olb.example.com"
   ],
   "x": 1350,
   "y": 60
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
   "x": 40,
   "y": 560
  },
  {
   "id": "agttok",
   "group": "note",
   "label": "Agent token:",
   "sub": [
    "client_id: agent1",
    "aud: agent1.example.com"
   ],
   "x": 380,
   "y": 560
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
   "x": 640,
   "y": 620
  },
  {
   "id": "apigw1",
   "group": "resource",
   "label": "API Gateway",
   "sub": [],
   "x": 1370,
   "y": 350
  },
  {
   "id": "apigw2",
   "group": "resource",
   "label": "API Gateway",
   "sub": [],
   "x": 1370,
   "y": 520
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
