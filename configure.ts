import Amplify from 'aws-amplify'

//fixme: replace with your data

Amplify.configure({
  Auth: {
    identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
    region: 'XX-XXXX-X',
    userPoolId: 'XX-XXXX-X_abcd1234',
    userPoolWebClientId: 'XX-XXXX-X_abcd1234',
  }
})