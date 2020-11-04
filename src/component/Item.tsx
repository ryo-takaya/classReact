import React from 'react'

type props = {
  text:string
}

class Item extends React.Component<props,{}>{
  render(){
    return  (
        <>
          todo {this.props.text}
        </>
    )
  }
}