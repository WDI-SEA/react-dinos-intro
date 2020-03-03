import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Post.js";

function App() {
  return (
    <div className="App">
      <Post 
        title={"Dinosaurs are awesome!"}
        author={"Stealthy Stegosarus"}
        body={"Variraptor Juravenator Saltopus Griphornis Polacanthoides Pinacosaurus Lessemsaurus Equijubus Avisaurus Urbacodon Paronychodon Brachiosaurus Yangchuanosaurus Jeholosaurus Avalonia Acrotholus Aegyptosaurus Giraffatitan Diplodocus Barrosasaurus Bonitasaura Skorpiovenator Unescoceratops Megadactylus Gyposaurus Muttaburrasaurus Xiaosaurus Coloradia Pneumatoarthrus Coelurosauravus Wannanosaurus Tarascosaurus Epidendrosaurus Saturnalia Rayososaurus Trinisaura Tapinocephalus Hypsirophus Anatosaurus Angolatitan Embasaurus Herbstosaurus Avalonia Supersaurus Wuerhosaurus Bistahieversor Tendaguria Parrosaurus Amtocephale Andesaurus. Scipionyx Archaeornithomimus Sinopliosaurus Isisaurus Heterosaurus Pachyspondylus Epanterias Sauropelta Galveosaurus Stegoceras Kinnareemimus Seismosaurus Procerosaurus Megalosaurus Dracopelta Spinosaurus Algoasaurus Atlasaurus Altispinax Leshansaurus Volkheimeria Campylodon Epidexipteryx Chilantaisaurus Orinosaurus Belodon Hallopus Brachyrophus Alectrosaurus Sinornithomimus Lametasaurus Archaeornithoides Neovenator Albalophosaurus Laornis Rinchenia Malarguesaurus Eucercosaurus Eoraptor Eshanosaurus Limusaurus Alwalkeria Thescelosaurus Limnosaurus Venaticosuchus Protognathus Helopus Microvenator Urbacodon Brontomerus. Angolatitan Andesaurus Arctosaurus Tornieria Variraptor Brontosaurus Barapasaurus Bradycneme Chilantaisaurus Bolong Goyocephale Kotasaurus Austroraptor Palaeosaurus Uteodon Oohkotokia Sinopliosaurus Neosodon Edmontonia Achillobator Tethyshadros Inosaurus Incisivosaurus Leipsanosaurus Andesaurus Velocisaurus Procerosaurus Coloradia Centrosaurus Nebulasaurus Microceratops Angaturama Cristatusaurus Cumnoria Nigersaurus Acanthopholis Emausaurus Sauropelta Turanoceratops Helioceratops Macrurosaurus Qantassaurus Garudimimus Bathygnathus Yaxartosaurus Pleuropeltus Cruxicheiros Dystylosaurus Trachodon Smilodon."}
        comments={[
          "So many dinos!",
          "Keep them coming!",
          "I didn't even know there were this many dinos!"
        ]} />
    </div>
  );
}

export default App;
