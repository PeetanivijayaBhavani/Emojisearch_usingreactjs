import React, { useState } from 'react'
import './Emoji.css';
const emojidata=[
    {
        id:1,
        symbol:'😁',
        name:'smile'
    },
    {
        id:2,
        symbol:'😭',
        name:'cry' 
    },
    {
        id:3,
        symbol:'😡',
        name:'angry' 
    },
    {
        id:4,
        symbol:'🥰',
        name:'lovely' 
    },
    {
        id:5,
        symbol:'😱',
        name:'shocking' 
    },
    {
        id:6,
        symbol:'🥵',
        name:'hot' 
    },
    {
        id:7,
        symbol:'🤒',
        name:'fever' 
    },
    {
        id:8,
        symbol:'😎',
        name:'hero' 
    },
    {
        id:9,
        symbol:'☠️',
        name:'danger' 
    },
    {
        id:10,
        symbol:'😴',
        name:'sleepy' 
    }
];
function Emoji() {
    const [searchEmoji,setSearchEmoji]=useState("");
    const handleChange=(e)=>
    {
        setSearchEmoji(e.target.value)
    }
    const showEmoji=emojidata.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLocaleLowerCase())
    });
  return (
    <div id="center">
        <h1>**React Emoji App**</h1>
<input type="text" placeholder='search for emoji' value={searchEmoji} onChange={(handleChange)}/>
<div>
    {
    showEmoji.map((emoji)=>emoji.symbol)
    }
</div>
    </div>
  )
}

export default Emoji