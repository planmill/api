# Notes for Claude: .

Created 2026-10-27 by A1 Test Planner. Aspect-specific notes for this directory; generic ones belong to the root CLAUDE.md, which maps aspects to directories.

## Findings by the agents
- 2026-10-27 A1 Test Planner: (agents/A01-test-planner) A behaviour whose only evidence is a server log file, a database execution plan or a person's judgement of a browser page cannot be a numbered test in this network: the test runner reads HTTP responses, files fetched over HTTPS and local files. Plan such a criterion in two halves - the runnable half asks the change to put the same facts in the API response (the limit, its value, the caller, a reference), and the log or plan proof is named in gaps as a person's item.
- 2026-10-27 A1 Test Planner: (agents/A01-test-planner) 'The instance stays responsive under load' is made runnable by expressing responsiveness as the measured answer time of a light API call sent while the heavy burst runs, with each call timed by the client and each heavy call cancelled by a client-side time limit. Watching server CPU is replaced by one read of the test server's build queue during the run, which is also what keeps the shared test server safe.
- 2026-10-27 A1 Test Planner: (agents/A01-test-planner) When an earlier round renumbers or replaces tests, a reviewer's items still quote the old numbers; answer them by the test title and say so in the added block, otherwise a setup step lands on a test that no longer exists.

