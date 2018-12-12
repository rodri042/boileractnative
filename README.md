# medsbyme

## Set up the environment
- Install node.js >= 8
- Install the React Native CLI
```bash
npm install -g react-native-cli
```
- Install Android Studio
- Install Android SDK 27 (Android 8.1 - Oreo)
- Add the following lines to your shell "run commands" file (`.bashrc`, `.zshrc`, ...)
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Install the application dependencies

```bash
npm install
```

## Run the application

```bash
npm run dev
```

It's highly recommended to enable "Live Reload". You can do it in the Dev Menu, which can be opened shaking your phone while the app is running. To reload manually: `adb shell input text "RR"`

## IDE Plugins
- Prettier (enable "format on save" option)
- EditorConfig
