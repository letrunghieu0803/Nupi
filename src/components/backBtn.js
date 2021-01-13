import React from 'react';
import "./style.css";
import { Button } from "react-bootstrap";

export default function BackBtn() {
  return (
    <div className="d-flex justify-content-end">
      <Button className="btn-back">Tro ve</Button>
    </div>
  );
}