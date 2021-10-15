import { AccountsReact } from 'meteor/meteoreact:accounts'

AccountsReact.configure({
  confirmPassword: false,
  enablePasswordChange: true,
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
  oauth: {
    google: {
      forceApprovalPrompt: true
    }
  },
  texts: {
    button: {
      signIn: 'Se connecter'
    },
    info: {
      emailSent: 'Check your inbox!'
    },
    title: {
      signUp: 'Créer votre compte',
      signIn: 'Connectez-vous'
    },
    links: {
      toSignIn: 'Vous avez déjà un compte? Connectez-vous',
      toSignUp: 'Vous n\'avez pas de compte ? Inscrivez-vous',
    },
    errors: {
      loginForbidden: "Votre nom d'utilisateur ou mot de passe est incorrect",
      userNotFound: "Votre nom d'utilisateur ou mot de passe est incorrect"
    },
    loginForbiddenMessage: "Votre nom d'utilisateur ou mot de passe est incorrect",
    userNotFound: "Votre nom d'utilisateur ou mot de passe est incorrect"
  }
})