# iframes in action

## Demos

### Clickjacking
In this demo, the "attacker's" website (on `http://localhost:12345`) embeds a vulnerable target website (on `http://localhost:12345`) in a translucent iframe and places it over a button which the user is invited to click.
When the user attempts to click the button, the target website is clicked instead, as indicated by the alert message.

1. Run 
```shell
npm run clickjacking-demo
```
2. Navigate a browser to `http://localhost:12345` (the "attacker's" website)
3. Click the button 

### Security Headers 

#### Effect of CSP directives:
  - `frame-src`
  - `frame-ancestors`

#### Effect of `X-Frame-Options` header
