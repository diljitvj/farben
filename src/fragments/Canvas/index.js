import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

const Canvas = ({ color, control }) => {
  const { mode } = control;
  const canvasRef = useRef(null);
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [context, setContext] = useState(null);

  const handleMouseDown = event => {
    console.log(event.clientX);
    console.log(event.clientY);
  };
  const handleMouseUp = event => {
    console.log(event.clientX);
    console.log(event.clientY);

    drawFigure();
  };

  const drawFigure = (startPoint, endPoint) => {
    console.log(canvasRef.current.getContext('2d'));
  };

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={clsx(styles.canvas, styles[mode])}
        width="100"
        height="100"
      ></canvas>
    </div>
  );
};

export default Canvas;
