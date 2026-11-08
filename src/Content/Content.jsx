import React from 'react';
import './Content.css';

const gamesList = [
  { title: 'TIC TAC TOE', path: 'games/XO.html', img: 'images/xo.png' },
  { title: 'MINI BALL', path: 'games/BallGame.html', img: 'images/red-ball.jpg' },
  { title: 'PING PONG', path: 'games/pingPong.html', img: 'images/pong.jpg' },
  { title: 'FLY IT', path: 'games/runner.html', img: 'images/fly.jpg' },
  { title: 'THE SNAKE', path: 'games/snake.html', img: 'images/snake.jpg' },
  { title: 'FAST SNAKE', path: 'games/snake2.html', img: 'images/snake2.png' },
  { title: 'STICK HERO', path: 'games/stick Hero.html', img: 'images/stick.png' },
  { title: 'THE MAZE', path: 'games/the maze.html', img: 'images/maze.jpg' },
  { title: 'SCRAMBLE', path: 'games/Scramble.html', img: 'images/scramble.jpg' },
  { title: '2048', path: 'games/2048.html', img: 'images/2048.jpg' },
  { title: 'BLAST', path: 'games/Blast.html', img: 'images/blast2.jpg' },
  { title: 'SNAKE 3', path: 'games/snake3.html', img: 'images/snake3.png' },
  { title: 'SUDUKU', path: 'games/sodoku.html', img: 'images/suduku.jpg' },
  { title: 'TETRIS', path: 'games/tiris.html', img: 'images/tetris.jpg' },
  { title: 'MEMORY', path: 'games/memory.html', img: 'images/memory-game.png' },
];

const Content = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className='x'>
      <h1 className='section-title'>
        OUR <span className='sp'>JS.</span> GAMES
      </h1>
      <div className='content'>
        {gamesList.map((game, index) => (
          <a key={index} href={`${baseUrl}${game.path}`} className='card-link'>
            <div className="cardo">
              <img 
                src={`${baseUrl}${game.img}`} 
                alt={game.title} 
                className='cim' 
              />
              <h3>{game.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Content;