// script.js

const shapes = document.querySelectorAll(".quadrangle, .rectangle, .circle"); // 図形要素を取得
const shapesBtn = document.getElementById("shapes_btn"); // ボタン要素を取得

let isRotating = false; // 回転フラグ

shapesBtn.addEventListener("click", () => {
  if (isRotating) return; // すでに回転中なら処理をスキップ

  isRotating = true; // 回転フラグをオン

  shapes.forEach((shape) => {
    shape.style.transition = "transform 2s ease-in-out"; // アニメーション設定
    shape.style.transform = "rotate(360deg)"; // 回転

    // 回転アニメーション完了後に回転フラグをオフ
    setTimeout(() => {
      isRotating = false;
      shape.style.transition = ""; // アニメーション設定を解除
      shape.style.transform = ""; // 回転を解除
    }, 2000); // アニメーション時間 (2秒)
  });
});
