import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostIndex extends Component {
  config = {
    navigationBarTitleText:'Posts'
  }

  handleClick(name,id,event){
    console.log(event)
    console.log( `hello ${name}`)

    Taro.navigateTo({
      url:`/pages/posts/show?id=${id}&name=${name}`
    })
  }

  componentWillMount(){
    Taro.request({
      url:'http://localhost:3333/posts'
    }).then(response => {
      console.log(response.data)
    })
  }

  render(){
    return (
      <View>
        <Text onClick={this.handleClick.bind(this,'shine',3)}>List</Text>
      </View>
    )
  }
}

export default PostIndex