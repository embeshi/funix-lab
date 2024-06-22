"use strict";

// Hàm xoá lớp border-end và border-start cho thanh navbar
function removeBorderOnXs(id, className) {
  const element = document.getElementById(id);
  if (element && window.innerWidth < 576) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Hàm Ẩn hiện border cho Certificate Section khi thay đổi kích thước màn hình
function addBorderOnXs(id, className) {
  const element = document.getElementById(id);
  if (element && window.innerWidth < 576) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

// Hàm ẩn hiện border của thanh navbar và certificate section
function EventBorder(id, className) {
  window.addEventListener("load", function () {
    removeBorderOnXs(id, className);
  });
  window.addEventListener("resize", function () {
    removeBorderOnXs(id, className);
  });
}

// Hàm ẩn hiện border của certificate section
function EventCer(id, className) {
  window.addEventListener("load", function () {
    addBorderOnXs(id, className);
  });
  window.addEventListener("resize", function () {
    addBorderOnXs(id, className);
  });
}

//Ẩn border của thanh navbar khi thay đổi kích thước màn hình
EventBorder("navigation1", "border-end");
EventBorder("navigation1", "border-start");
EventBorder("navigation3", "border-end");
EventBorder("navigation3", "border-start");
EventBorder("navigation2", "border-end");
EventBorder("navigation4", "border-end");

//Ẩn hiện border cho Certificate Section khi thay đổi kích thước màn hình
EventBorder("cer1", "border-end");
EventCer("cer1", "border-bottom");

var container = document.getElementById("subCertificate");
var element = document.getElementById("cer0");
var existingDiv = document.getElementById("cer3");
window.addEventListener("resize", function () {
  if (element && window.innerWidth < 576) {
    // Xóa element lớp cer0 khi kích thước màn hình nhỏ hơn 576
    container.removeChild(element);
  } else if (element && window.innerWidth >= 576) {
    // Thêm element lớp cer0 trước element lớp cer3 khi kích thước màn hình nhỏ hơn 576
    container.insertBefore(element, cer3);
  }
});
window.addEventListener("load", function () {
  if (element && window.innerWidth < 576) {
    // Xóa element lớp cer0 khi kích thước màn hình nhỏ hơn 576
    container.removeChild(element);
  } else if (element && window.innerWidth >= 576) {
    // Thêm element lớp cer0 trước element lớp cer3 khi kích thước màn hình nhỏ hơn 576
    container.insertBefore(element, cer3);
  }
});

EventCer("cer2", "border-bottom");
EventCer("cer2", "border-1");
EventCer("cer2", "border-warning");

// Chức năng ẩn thông tin cá nhân
const btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", function () {
  // Lấy các giá trị email chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // Điều kiện để là 1 Email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Thể hiện email lỗi
  const errormail = document.querySelector(".error-email");
  // Check email
  const checkRegex = emailValue.match(regex);
  const checkEmail = emailValue == "vyvtfx31636@funix.edu.vn";
  // Lấy phần chứa thông tin use
  const sectionContent = document.querySelector("#personal-info");

  // Phần chứa button
  const emailChecksection = document.querySelector("#email-check");
  if (checkRegex && checkEmail) {
    sectionContent.classList.remove("d-none"); // show content
    emailChecksection.style.display = "none"; //an nut submit
    errormail.innerHTML = "";
  } else {
    errormail.innerHTML = "Please enter valid email!";
    errormail.style.color = "red";
  }
});

// // // View More, View Less Button
// const viewMoreBtn = document.querySelectorAll(".viewMoreBtn");
// const viewLessBtn = document.querySelectorAll(".viewLessBtn");

//Hiển thị thay đổi view less - view more khi nhấn nút để mở rộng cửa sổ
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll("#viewMoreBtn");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const button = this;
      if (button.getAttribute("aria-expanded") === "true") {
        button.textContent = "View Less";
        button.classList.remove("viewMoreBtnIcon");
        button.classList.add("viewLessBtnIcon")
      } else {
        button.textContent = "View More";
        button.classList.remove("viewLessBtnIcon");
        button.classList.add("viewMoreBtnIcon");
      }
    });
  });
});
