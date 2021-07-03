const express = require("express"); // import express from "express"
const cors = require("cors");

const app = express();
const PORT = 3000;

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "12",
    artistName: "Beyoncé",
    collectionName: "Sasha Fierce",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "13",
    artistName: "Beyoncé",
    collectionName: "Me, myself and I",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome message
app.get("/", (req, res) => {
  res.send("Welcome to this Albums Page, start by requesting /albums");
});

//Get all albums
app.get("/albums", (req, res) => {
  res.send(albumsData);
});

// Get single album by id
app.get("/albums/:albumId", (req, res) => {
  const { albumId } = req.params;

  const foundAlbum = albumsData.find((album) => album.albumId === albumId);

  if (foundAlbum) {
    res.send(foundAlbum);
  } else {
    res.status(404).json({ msg: `Album not found with id: ${albumId}` });
  }
});

// Create album
app.post("/albums", (req, res) => {
  const newAlbum = {
    ...req.body
  };

  albumsData.push(newAlbum);

  res.json(albumsData);
});

// Delete an album by id
app.delete("/albums/:albumId", (req, res) => {
     const { albumId } = req.params;

     const foundAlbum = albumsData.find((album) => album.albumId === albumId);
    
     const deleteAlbum = albumsData.splice(foundAlbum, 1);
    
     if (deleteAlbum) {
       res.json({
           msg: "Album deleted",
           albums: albumsData
       });
     } else {
       res.status(404).json({ msg: `Album not found with id: ${albumId}` });
     }
  
});

app.listen(PORT, () =>
  console.log(`Server is listening on port: ${PORT}. Ready to accept requests!`)
);
