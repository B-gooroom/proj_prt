"use client";
import styles from "./testin.module.css";
import Btn from "@/styles/atoms/button";
import Label from "@/styles/atoms/label";
import Input from "@/styles/atoms/input";

export default function page() {
  function handleSubmit({ e }: any) {
    e.preventDefault();
    // console.log("handle", e);
  }

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "20px" }}>atoms 테스트 페이지</div>
      <Btn>black</Btn>
      <Btn border="pink">pink</Btn>
      <Label color="blue">[label] atomic design</Label>
      <form onSubmit={handleSubmit}>
        <Label color="darkgreen">id</Label>
        <Input type="text" placeholder="testForm" />
      </form>
    </div>
  );
}
