/* eslint-disable no-console */
import * as msal from 'msal'
import { AuthOptions } from 'msal/lib-commonjs/Configuration'

export default class MSALService {
  app: msal.UserAgentApplication
  private readonly AuthDefault: AuthOptions = {
    clientId: '',
    validateAuthority: true,
    redirectUri: window.location.href, // "http://localhost:8088",    //window.location.href,
    postLogoutRedirectUri: window.location.href, // "http://localhost:8088",    //window.location.href,
    navigateToLoginRequestUrl: true
  }

  private readonly authParam: msal.AuthenticationParameters = {
    scopes: ['user.read']
  }

  auth: AuthOptions

  constructor(clientId: string, tenantId: string) {
    console.log('AuthService created..........')
    console.log(window.location.href)
    console.log(window.location.hash)
    this.auth = Object.assign(this.AuthDefault, {
      clientId,
      authority: `https://login.microsoftonline.com/${tenantId}`
    })
    this.app = new msal.UserAgentApplication({
      auth: this.auth
    })
    this.app.handleRedirectCallback(
      (error: msal.AuthError, response?: msal.AuthResponse) => {
        console.log('handleRedirectCallback===>')
        console.log(error)
        console.log(response)
        console.log('<=== handleRedirectCallback')
      }
    )
  }

  login() {
    if (!this.app.isCallback(window.location.hash) && !this.app.getAccount()) {
      // request can be used for login or token request, however in more complex situations this can have diverging options
      this.app.loginRedirect(this.authParam)
    }
  }

  logout() {
    this.app.logout()
  }

  isAuthenticated() {
    console.log('isAuthenticated:')
    console.log('    iscallback :' + this.app.isCallback(window.location.hash))
    console.log('    getaccout :' + this.app.getAccount())

    const result =
      !this.app.isCallback(window.location.hash) && !!this.app.getAccount()
    console.log('    result :' + result)
    return result
  }

  async getToken(): Promise<msal.AuthResponse> {
    const token = await this.app
      .acquireTokenSilent(this.authParam)
      .catch(async () => {
        return await this.app.acquireTokenPopup(this.authParam)
      })
    return token
  }

  async getApiToken(scopes: string[]): Promise<msal.AuthResponse> {
    const apiauthParam: msal.AuthenticationParameters = {
      scopes
    }
    const token = await this.app
      .acquireTokenSilent(apiauthParam)
      .catch(async () => {
        return await this.app.acquireTokenPopup(apiauthParam)
      })
    return token
  }
}
