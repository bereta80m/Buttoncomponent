import "./App.css";
import Sidebar from "./components/Sidebar";
import { Button } from "@mui/base";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function App() {
  return (
    <div className="grid w-full h-screen lg:grid-cols-6    ">
      <Sidebar />
      <main className="grid col-span-2 pl-60 py-10 gap-10 w-full">
        <p className="text-3xl font-bold">Buttons</p>
        <div className="grid lg:grid-cols-2 gap-5 w-full ">
          {ButtonesMios.map((item, index) => {
            return (
              <div className="flex flex-col gap-3 w-full ">
                <p className="flex w-60  "> {item.name}</p>
                <p className="">{item.Btn}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-20 w-full ">
          <div className=" w-60 ">
            <p>{'<Button  size="sm" />'}</p>
            <Button
              variant="contained"
              className="bg-[#2962ff]  text-white font-semibold px-2 py-1 rounded-lg"
            >
              Default
            </Button>
          </div>
          <div className="w-60">
          <p>{'<Button size="md" />'}</p>

            <Button
              variant="contained"
              className="bg-[#2962ff]  text-white font-semibold px-3 py-2 rounded-lg"
            >
              Default
            </Button>
          </div>
          <div className="w-60">
          <p>{'<Button  size="lg"/>'}</p>
          
            <Button
              variant="contained"
              className="bg-[#2962ff] text-white font-semibold px-4 py-3 rounded-lg "
            >
              Default
            </Button>
          </div>
        </div>

      
        <div className="grid lg:grid-cols-4 w-full items-center gap-16  ">

          <div className="w-60">
          <p>{'<Button color="default" />'}</p>

            <Button
              variant="contained"
              className="bg-[#e0e0e0]  text-black font-semibold px-4 py-3 rounded-lg"
            >
              Default
            </Button>
          </div>

          <div className="w-60 ">
          <p>{'<Button  color="Primary"/>'}</p>

            <Button
              variant="contained"
              className="bg-[#2962ff]  text-white font-semibold px-4 py-3 rounded-lg"
            >
              Default
            </Button>
          </div>
          <div className="w-60">
          <p>{'<Button  color="Secundary"/>'}</p>

            <Button
              variant="contained"
              className="bg-[#455a64]  text-white font-semibold px-4 py-3 rounded-lg"
            >
              Secundary
            </Button>
          </div>
          <div className="w-60">
          <p>{'<Button  color="Danger"/>'}</p>

            <Button
              variant="contained"
              className="bg-[#d32f2f]  text-white font-semibold px-4 py-3 rounded-lg"
            >
              Danger
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 w-full items-center gap-16">

          <div className="">
            <p>{'&:hover, &:focus'}</p>
            <Button
            variant="contained"
            className="bg-[#aeaeae]  text-black font-semibold px-4 py-3  rounded-lg"
          >
            Default
          </Button>
          </div>
          <div className="">
          <p className="h-5">{''}</p>

          <Button
            variant="contained"
            className="bg-[#0039cb]  text-white font-semibold px-4 py-3  rounded-lg"
          >
            Default
          </Button>
          </div>
          <div className="">
          <p className="h-5">{''}</p>


          <Button
            variant="contained"
            className="bg-[#1c313a]  text-white font-semibold px-4 py-3 rounded-lg"
          >
            Secundary
          </Button>
          </div>
          <div className="">
          <p className="h-5">{''}</p>

          <Button
            variant="contained"
            className="bg-[#9a0007]  text-white font-semibold px-4 py-3 rounded-lg"
          >
            Danger
          </Button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;

const ButtonesMios = [
  {
    name: "<Button  />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="bg-[#e0e0e0] px-5 py-2 rounded-lg font-semibold"
      >
        Default
      </Button>
    ),
  },
  {
    name: "&:hover, &:focus",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="bg-[#aeaeae] px-5 py-2 rounded-lg font-semibold"
      >
        Default
      </Button>
    ),
  },

  {
    name: "<Button variant='outlined' />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="outlined"
        className="text-[#3d5afe] px-5 py-2 border border-[#3d5afe]  rounded-lg font-semibold"
      >
        Default
      </Button>
    ),
  },
  {
    name: "&:hover, &:focus",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="outlined"
        className="bg-[#eaefff] text-[#3d5afe] px-5 py-2 border border-[#3d5afe]  rounded-lg font-semibold"
      >
        Default
      </Button>
    ),
  },

  {
    name: "<Button  />",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="text-[#3d5afe] font-semibold">
        Default
      </Button>
    ),
  },
  {
    name: "&:hover, &:focus",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="bg-[#eaefff] text-[#3d5afe] font-semibold px-5 py-2 rounded-lg"
      >
        Default
      </Button>
    ),
  },

  {
    name: "<Button disabledShadow />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="bg-[#3d5afe] font-semibold px-5 py-2 rounded-lg text-white"
      >
        Default
      </Button>
    ),
  },
  { name: "", alt: "", id: 1, Btn: "" },

  {
    name: "<Button  disabled />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        disabled
        className="bg-[#e0e0e0] font-semibold px-4 py-2 rounded-lg text-[#9e9e9e]"
      >
        Desabled
      </Button>
    ),
  },
  {
    name: "<Button variant='text' disable />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="font-semibold px-4 py-2 rounded-lg text-[#9e9e9e]"
      >
        Desabled
      </Button>
    ),
  },

  {
    name: "<Button startIcon='local_grocery_store' />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="flex bg-[#2962ff] text-white  font-semibold px-4 py-3 rounded-lg items-center gap-2 "
      >
        <AddShoppingCartIcon className="" />
        Default
      </Button>
    ),
  },
  {
    name: "<Button endIcon='local_grocery_store' />",
    alt: "",
    id: 1,
    Btn: (
      <Button
        variant="contained"
        className="flex bg-[#2962ff] text-white  font-semibold px-4 py-3 rounded-lg items-center gap-2 "
      >
        Default <AddShoppingCartIcon className=" " />
      </Button>
    ),
  },
];

const MenuOpenCols = [
  {
    name: "<Button  />",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="">
        Default
      </Button>
    ),
  },
  {
    name: "&:hover, &:focus",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="">
        Default
      </Button>
    ),
  },

  {
    name: "<Button  />",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="">
        Default
      </Button>
    ),
  },
  {
    name: "&:hover, &:focus",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="">
        Default
      </Button>
    ),
  },

  {
    name: "<Button  />",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="">
        Default
      </Button>
    ),
  },
  {
    name: "&:hover, &:focus",
    alt: "",
    id: 1,
    Btn: (
      <Button variant="contained" className="">
        Default
      </Button>
    ),
  },
];
