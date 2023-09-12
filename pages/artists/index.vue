<template>
  <h1>Artists</h1>

  <img style="width: 200px; height: 200px" 
       :src="bigImage" alt="">

  <div v-for="artist of artists" :key="artist.id">
    <h3 @click="change(artist.image)">
      {{ artist.name }}
      </h3>
    <img style="width: 100px; height: 100px" 
        :src="artist.image" 
        alt="">
  </div>
</template>

<script setup lang="ts">
const bigImage = useState<string>(undefined)
bigImage.value = "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"

const change = function (_image: string) {
  console.log(_image)
  bigImage.value = _image
}

const artists = [
  {
    id: 1,
    name: "Getsunova",
    image: "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top"
  },
  {
    id: 2,
    name: "Cocktail",
    image: "https://image.petmd.com/files/styles/978x550/public/orange-tabby-kitten-walking-across-floor.jpg"
  },
  {
    id: 3,
    name: "Pixxie",
    image: "https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg"
  }
]


</script>