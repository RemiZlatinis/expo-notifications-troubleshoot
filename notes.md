# Extra Steps to utilize the Expo Push Notifications

### Configure and Build a Development Build

[Documentation] https://docs.expo.dev/tutorial/eas/configure-development-build/

- Adding the `expo-dev-client`
- Install the `eas-cli` tool
- login to EAS
- Initialize the EAS project (Project ID will be generated on this step)
- Configure the EAS project: `eas build:configure`
- Build the development build: `eas build --platform android --profile development`
- During the build process, the eas will create a Android Keystore
