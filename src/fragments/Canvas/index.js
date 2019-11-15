import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

const Canvas = ({ color, control }) => {
  const { mode } = control;
  const canvasRef = useRef(null);
  const [figures, setFigures] = useState([]);
  const [startPoint, setStartPoint] = useState(null);

  const drawFigures = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);

    figures.forEach(figure => {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(figure.startPoint.x, figure.startPoint.y);
      ctx.lineTo(figure.endPoint.x, figure.endPoint.y);
      ctx.stroke();
      ctx.fill();
    });
  };

  useEffect(drawFigures, figures);

  const handleMouseDown = event => {
    setStartPoint({
      x: event.clientX - 7.5,
      y: event.clientY - 7.5
    });
  };

  const handleMouseUp = event => {
    const figures = [...figures];
    figures.splice(figures.length - 1, 1, {
      startPoint,
      endPoint: {
        x: event.clientX,
        y: event.clientY
      }
    });
    setFigures(figures);
    setStartPoint(null);
  };

  const handleMouseMove = event => {
    if (startPoint) {
      const figures = [...figures];
      figures.push({
        startPoint,
        endPoint: { x: event.clientX, y: event.clearRect }
      });
      setFigures(figures);
    }
  };

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className={clsx(styles.canvas, styles[mode])}
        width="500"
        height="500"
      ></canvas>
    </div>
  );
};

export default Canvas;
