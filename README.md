# I Refuse To Take a Serious Picture (The Dan Ross Story)

This is an image gallery I made using React, Node, SQL, and Express.  It is also a testament to the fact that my face refuses to act in a normal manner when a camera is placed in front of it.

### Getting Started

First, clone this repository and using the terminal install the npm dependencies.

 ```
 npm install
 ```

Then, using Postico or your preferred PostgreSQL client, run the following queries:

```
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(200) NOT NULL,
	description VARCHAR(500) NOT NULL,
	likes INT default 0
);

INSERT INTO gallery (path, description)
VALUES ('images/americasmostwanted.jpg', 'I swear I''m not a serial killer, I''m just tired'),
('images/aoa.jpg', 'AOAs and Heartbreaks'),
('images/beautiful.jpg', 'Me on my throne'),
('images/crew.jpg', 'Some wizards, some Muggles, all class.'),
('images/crushed.jpg', 'Volunteering: Not even once.'),
('images/drunk.jpg', 'That time I got drunk and drooled on myself in front of strangers'),
('images/duckface.jpg', 'The most attractive facial expression on Earth or beyond'),
('images/guesswho.jpg', 'The problem with playing board games with rudos is that they always cheat :('),
('images/heart.jpg', 'E> Be still, my beating heart <3'),
('images/heatray.jpg', 'Go go gadget heat vision'),
('images/ilikeboyz.jpg', 'Hey cheerleaders, I got the new cheer.  So fab!'),
('images/lap.jpeg', 'I''m basically a lapdog'),
('images/minion.jpg', 'I walked around Chicago like this, it was not my best idea'),
('images/ohbb.jpg', 'Stare into my eyes...'),
('images/phonehome.jpg', 'Best smelling place in the Universe'),
('images/rvivr.jpg', 'I''m in this one I swear!'),
('images/slide.jpg', 'Wheeeeeeeeee!'),
('images/slugbuds.jpg', 'They see me sluggin'', they hatin''...'),
('images/trashhouse.jpg', 'Ew who lives like this?  Oh wait, right, me.'),
('images/twentyone.jpg', 'Birthday diva'),
('images/uhoh.jpg', 'Twenty stories over the Atlantic'),
('images/wedding.jpg', 'd''aww'),
('images/wedding2.jpg', 'Okay fine one actual kinda serious picture'),
('images/wedding3.jpg', 'b4 da drinks'),
('images/xmas.jpg', 'Christmas trying to kill me, as it does'),
('images/xmas2.jpg', 'Trimming the tree?  Did I use that right?'),
('images/ghost.jpg', 'A g-g-g-ghost!'),
('images/wut.jpg', 'Okay, this one defies description'),
('images/antilovepoem.jpg', 'Pretenious hipster poet'),
('images/purple.jpg', 'Fuzzy!'),
('images/pool.jpg','Just an ordinary night, sweeping the pool table'),
('images/fro.jpg', 'Grew my hair out a bit'),
('images/candy.jpg', 'Candy!'),
('images/glam.jpg', 'Glam af'),
('images/angryglam.jpg', 'Grrrrrrrrr'),
('images/glam2.jpg', 'So beautiful <3');
```

Now, start the server.

```
npm run server
```

Once the server is running, open a new terminal tab (`cmd`+`t`) and start the client.

```
npm run client
```

If this does not automatically open `localhost:3000` in your preferred browser, do so and enjoy my dumb face!

### Usage

When first using this image gallery, you should calibrate your system by looking at your own hands, then turning them over and looking at the backs of them with a sense of wonder.

Now, go my child, look at pictures!  Click on pictures to see insightful commentary!  Like things!  Like things again!  Marvel at the number of likes you have accrued!

And Jesus wept, for there were no more worlds to conquer.