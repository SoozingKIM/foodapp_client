import React, { Component, useState} from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class ChooseSex extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        open: false,
        value: null,
        items: [
                 {label: '여성', value: 'female'},
               {label: '남성', value: 'male'},
               {label: '그 외', value: 'other'}]
      };
  
      this.setValue = this.setValue.bind(this);
    }
  
    setOpen(open) {
      this.setState({
        open
      });
    }
  
    setValue(callback) {
      this.setState(state => ({
        value: callback(state.value)
      }));
    }
  
    setItems(callback) {
      this.setState(state => ({
        items: callback(state.items)
      }));
    }
  
    render() {
      const { open, value, items } = this.state;
  
      return (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
         
        />
      );
    }
  }

// import DropDownPicker from 'react-native-dropdown-picker';

// export function chooseSex() {

//   return (
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//       {label: '여성', value: 'hi'},
//       {label: '남성', value: 'male'},
//       {label: '그 외', value: 'other'}
//     ]);
  
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//       style={{flex:1}}
//       listItemContainer={{
//       height: 50
//       }}
//       dropDownContainerStyle={{
//       backgroundColor: "#fff"
//       }}
//     />
//     // {/* <Text>picker</Text> */}
  
//   );
// }

