# Extra Steps to utilize the Expo Push Notifications

### Configure and Build a Development Build

[Documentation] https://docs.expo.dev/tutorial/eas/configure-development-build/

- Adding the `expo-dev-client`
- Install the `eas-cli` tool
- login to EAS
- Initialize the EAS project _(Project ID will be generated on this step)_
- Configure the EAS project: `eas build:configure`
- Build the development build: `eas build --platform android --profile development`
- During the build process, the eas will create a Android Keystore

### Using Firebase Cloud Messaging V1

[Documentation] https://docs.expo.dev/push-notifications/fcm-credentials/

- Create a new Firebase project
- Generate a new Google Service Account Key _(This Firebase service account will be used to authenticate for the FCM feature)_
- Adding the Google Service Account Key to the EAS project _(Under Service Credentials > FCM V1 service account key, click Add a service account key)_
- Register the Application to the Firebase Console _(SHA-1 hash is on the EAS project Credentials)_
- Add the `google-services.json` to the app root directory
- Exclude the `google-services.json` from source control
- Create `.easignore` clone of the `.gitignore` without the `google-services.json` _(The last three steps must replaced with EAS secrets to production environment)_
- Configure the app.json with the `google-services.json` path
- Rebuild the development build: `eas build --platform android --profile development`
