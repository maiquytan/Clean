#  Star App

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-i18next](https://react.i18next.com/) and   [react-native-localize](https://github.com/zoontek/react-native-localize) for string localization.
- [formik](https://formik.org/docs/overview) for handling a form.
- [yup](https://github.com/jquense/yup) for runtime value parsing and validation.

## Folder structure

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, fonts, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `i18n`: Folder to store the languages files.
  - `navigation`: Folder to store the navigators.
  - `scenes`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles.
      - `Screen.js`
      - `Screen.styles.js`
  - `utils`: Folder that contains utilities.
  - `services`: Folder that contains the application services.
  - `themes`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

Modify the environment variables files in root folder (`.env` for development environment)

## Install libraries
 Run scripts in root folder
- npm install
- npx pod install

## Run on local
#### Android
In root folder, run the command below
- `npm run android` for development environment

#### iOS

1. Go to the Xcode
2. Select the schema
3. Select a target
4. Run

## Build


These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android
In root folder, run the command below
- `npm run android:build` for development environment

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

## Styleguide

For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).
