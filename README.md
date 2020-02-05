## 1st algorithm exercise

Fork the project on your own repository.

Your job is to update only `index.js` file and the algo function to make the tests pass.

```shell
npm install
npm test
```

When you are done push it to your repo and share the link to `ìban.goenaga@sportihome.com`

## 2nd algorithm exercise

Create a format function that takes two arguments, text and width, and formats the text to fit the width.

Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line.

Example:

```
const text = "Comment identifier de manière simple et rapide les bons plans logements à côté des spots ?
              C'est pour répondre à ce besoin que nous avons décidé de créer sportihome.com, la 1ère plateforme de logements d'aventures entre particuliers partageant les mêmes passions sportives.
              Notre mission est de vous permettre de réserver de manière simple et sûre, le logement idéalement situé pour la pratique de vos activités sportives (VTT, randonnée, golf, parapente, surf, kitesurf, équitation, etc.) et de vous faire découvrir de nouveaux spots renseignés et évalués par la communauté des sportifs.
              Il vous est ainsi possible de dormir soit chez un hôte ayant la même passion sportive que vous, qui pourra partager bons plans et conseils, soit dans un logement situé au plus près du spot.
              Êtes-vous prêt pour de nouvelles aventures ? Alors rejoignez la communauté des sportinautes et venez renseigner vos logements disponibles et vos spots.
              La sportiteam"
              
format(text, 40);
// output = "Comment identifier de manière simple et
            rapide les bons plans logements à côté
            des spots ?
            C'est pour répondre à ce besoin que nous
            avons décidé de créer sportihome.com, la
            1ère plateforme de logements d'aventures
            entre particuliers partageant les mêmes
            passions sportives.
            Notre mission est de vous permettre de
            réserver de manière simple et sûre, le
            logement idéalement situé pour la
            pratique de vos activités sportives
            (VTT, randonnée, golf, parapente, surf,
            kitesurf, équitation, etc.) et de vous
            faire découvrir de nouveaux spots
            renseignés et évalués par la communauté
            des sportifs.
            Il vous est ainsi possible de dormir
            soit chez un hôte ayant la même passion
            sportive que vous, qui pourra partager
            bons plans et conseils, soit dans un
            logement situé au plus près du spot.
            Êtes-vous prêt pour de nouvelles
            aventures ? Alors rejoignez la
            communauté des sportinautes et venez
            renseigner vos logements disponibles et
            vos spots.
            La sportiteam"
```

