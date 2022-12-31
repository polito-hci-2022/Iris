# IRIS

Human-Computer-Interaction

Politecnico di Torino

- Simone Formica
- Fabio Orazio Mirto
- Michele Pistan
- Michele Veronesi

First of all, install NodeJS 16.x.x

Unix system (included WSL)
```
sudo apt install curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash 
nvm install 16.18.0
```

Then, install packets on client and server folder using
```console
npm install
```

To execute client-side 
```console
npm run web 
```
this command should be executed inside client folder


## Best Practice
### React-Three-Fiber (Threejs in React)
At the moment it is not necessary to spend time on header of the app (background, VR model) since we have to choice a background so you have to copy and paste this part of code used as placeholder
```
<View style={{flex: 0.7}}>
    <Text>Memory</Text>
    <View style={styles.backgroundCompact}>
         <View style={{
            backgroundColor: "#0078fe",
            padding:10,
            marginLeft: '40%',
            borderRadius: 5,
            marginBottom: 15,
            marginTop: 10,
            marginRight: "12%",
            maxWidth: '50%',
            alignSelf: 'flex-end',
            //maxWidth: 500,
            borderRadius: 20,
            }} >
                <Text style={{ fontSize: 16, color: "#fff", }}>
                    Right here, there are the assigned homeworks, I'm here to help you!
                </Text>
            <View style={styles.leftArrow}></View>
            <View style={styles.leftArrowOverlap}></View>
        </View>
        <ModelCompact/>
        <PlayButton style={styles.buttonStudyCompact} navigation={navigation}/>
    </View>
</View>
```

### Button
If you want to use a Button:
1) Check if the button already exists in the folder
```
client/components/buttons
```
2) If the button does not exists, create it duplicating the file HomeButton.js and modify only this line of code: 
```
const NewButton = ({navigation}) => {  
    return (
    <TouchableOpacity 
        title="NewButtonTitle"
        onPress={() => navigation.navigate('NewButtonPage')}
        style={styles.NewButtonStyle}>
            <Icon style={{
                resizeMode:"contain",
                height: 100,
                width:100,
            }
        }
        icon="mdi:NewButtonIcon"
        <Text>NewButtonText</Text>
    </TouchableOpacity>
    );
}
export default NewButton;

```
3) To use the button you have to import the js file and then call it in this way:
```
<NewButton navigation={navigation}/>
```
