import React from "react";

const playlistArr = [
  { title: "Bohemian Rhapsody", artist: "Queen", id: 1 },
  { title: "As It Was", artist: "Harry Styles", id: 2  },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", id: 3  },
  { title: "Therefore I Am", artist: "Billie Eilish", id: 4  },
];

export const CardTrucha = ({title, artist, id}) => {
  return <div>
    <h2>{title}</h2>
    <h3>{artist}</h3>
  </div>;
};


export const EjemploRenderDinamico = () => {
  return (
    playlistArr.map((disco) => {
        return <CardTrucha 
        title={disco.title}
        artist={disco.artist}
        id= {disco.id}
        />
    })
  )
}

