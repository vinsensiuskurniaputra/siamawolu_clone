import {
    onBoarding1,
    onBoarding2,
    onBoarding3,
    progressBarBlack,
    progressBarGray,
} from "../assets"

export const onBoardings = [
  {
    id: "onboarding-1",
    img: onBoarding1,
    title: "Absensi kini menjadi jauh lebih mudah",
    progressBars: [
      {
        id: "progressBar-1",
        icon: progressBarBlack,
        link: "/onBoarding1",
      },
      {
        id: "progressBar-2",
        icon: progressBarGray,
        link: "/onBoarding2",
      },
      {
        id: "progressBar-3",
        icon: progressBarGray,
        link: "/onBoarding3",
      },
    ],
    content:
      "Dengan SiAmawolu mempermudah kita untuk absensi bagi siswa,guru mauupun karyawan.",
    buttonText: "Next",
  },
  {
    id: "onboarding-2",
    img: onBoarding2,
    title: "Lebih teratur dengan SiAmaWolu",
    progressBars: [
      {
        id: "progressBar-1",
        icon: progressBarBlack,
        link: "/onBoarding1",
      },
      {
        id: "progressBar-2",
        icon: progressBarBlack,
        link: "/onBoarding2",
      },
      {
        id: "progressBar-3",
        icon: progressBarGray,
        link: "/onBoarding3",
      },
    ],
    content:
      "Mengatur waktu agar menjadi lebih displin, tepat waktu, juga melatih kita untuk  bertanggung jawab.",
    buttonText: "Next",
  },
  {
    id: "onboarding-3",
    img: onBoarding3,
    title: "Dengan SiAmawolu absensi jauh lebih praktis",
    progressBars: [
      {
        id: "progressBar-1",
        icon: progressBarBlack,
        link: "/onBoarding1",
      },
      {
        id: "progressBar-2",
        icon: progressBarBlack,
        link: "/onBoarding2",
      },
      {
        id: "progressBar-3",
        icon: progressBarBlack,
        link: "/onBoarding3",
      },
    ],
    content:
      "SiAmawolu sangat praktis. dengan tampilan yang menarik, menjadikan kita nyaman dalam menggunakannya. ",
    buttonText: "Get Started",
  },
];