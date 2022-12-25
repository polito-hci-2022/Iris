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
