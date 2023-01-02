import {
    onBoarding1,
    onBoarding2,
    onBoarding3,
    progressBarBlack,
    progressBarGray,
} from "../assets"

import {
  HomeIcon,
  PencilSquareIcon,
  ChartBarIcon,
  UserIcon,
} from "@heroicons/react/20/outline"

import { 
  CalendarIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  PhoneIcon,
 } from "@heroicons/react/20/solid";

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

export const bottomNavbar = [
  {
    id: "home",
    icon: HomeIcon,
    name: "Home",
  },
  {
    id: "presensi",
    icon: PencilSquareIcon,
    name: "Presensi",
  },
  {
    id: "statistik",
    icon: ChartBarIcon,
    name: "Statistic",
  },
  {
    id: "profil",
    icon: UserIcon,
    name: "Profil",
  },
];

export const dashboardMenu = [
  {
    id: "jadwal",
    icon: CalendarIcon,
    iconColor: "#A3A3A3",
    bgColor: "#F5F5F5",
    name: "Jadwal",
  },
  {
    id: "ijin",
    icon: ClipboardDocumentListIcon,
    iconColor: "#367A59",
    bgColor: "#F2F2F2",
    name: "Ijin",
  },
  {
    id: "riwayat",
    icon: FolderIcon,
    iconColor: "#CC9424",
    bgColor: "#FAF1E0",
    name: "Riwayat",
  },
  {
    id: "hub-admin",
    icon: PhoneIcon,
    iconColor: "#BD251C",
    bgColor: "#FFF4F2",
    name: "Hub.Admin",
  },
];