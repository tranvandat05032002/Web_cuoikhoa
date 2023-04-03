import useOnchange from "../../hooks/useOnchange";
import ReactQuill, { Quill } from "react-quill";
import React from "react";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import ImageUploader from "quill-image-uploader";
import FormRow from "../../components/common/FormRow";
import FormGroup from "../../components/common/FormGroup";
import DatePicker from "react-date-picker";
import axios from "axios";
import { v4 as uuidV4 } from "uuid";
import { useForm } from "react-hook-form";
import { IconCoin } from "../../components/icons";
import { Dropdown } from "../../components/dropdown";
import { Button, Textarea } from "../../components";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { apiURL, imgbbAPI } from "../../config/pathConfig";
import ImageUpload from "../../components/image/ImageUpload";
Quill.register("modules/imageUploader", ImageUploader);
const categoriesData = ["architecture", "education"];
const CampaignAddNew = () => {
  const [content, setContent] = React.useState("");
  const modules = React.useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          console.log("image", file);
          bodyFormData.append("image", file);
          const response = await axios({
            method: "POST",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  const { handleSubmit, control, setValue, watch, reset } = useForm();
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [filterCountries, setFilterCountries] = useOnchange(500);
  const [countries, setCountries] = React.useState();
  React.useEffect(() => {
    if (!filterCountries) return;
    const fetchCountry = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: `https://restcountries.com/v3.1/name/${filterCountries}`,
        });
        setCountries(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCountry();
    return () => {
      //		cleanup func
    };
  }, [filterCountries]);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const resetData = () => {
    setStartDate("")
    setEndDate("")
    setContent("")
    reset({})
  }
  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`${apiURL}/categories`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success("create new campaign successfully");
      resetData()
    } catch (error) {
      toast.error("Can't create new campaign");
    }
  };
  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`http://localhost:4001/api/categories/1`);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      {/* <Button kind="primary" onClick={handleDelete}>
        Delete
      </Button> */}
      <div className="text-center">
        <h1 className="py-4 px-16 bg-text4 mb-10 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input
              placeholder="Write a title"
              name="title"
              control={control}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("category", "Select a category")}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={uuidV4()}
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            name="short_description"
            placeholder="Write a short description..."
            control={control}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            ></ImageUpload>
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
        <FormGroup>
          <div className="flex text-white bg-secondary rounded-[10px] items-center mb-[28px]">
            <div className="text-[25px] px-[45px] py-[31px] flex items-center justify-start gap-x-6 font-bold">
              <IconCoin></IconCoin>
              <h1 className="">You will get 90% of total raised</h1>
            </div>
            <img srcSet="/Perk/Union.png 2x" alt="" className="" />
          </div>
          <FormRow>
            <div>
              <FormGroup>
                <Label>Goal *</Label>
                <Input
                  name={"goal"}
                  placeholder="$0.00 USD"
                  control={control}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Amount Prefilled</Label>
                <Input
                  placeholder="Amount Prefilled"
                  control={control}
                  name="amount"
                ></Input>
              </FormGroup>
              <p className="text-sm mb-[25px] font-medium text-text3 text-left">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
              <FormGroup>
                <Label>Campaign End Method</Label>
                <Dropdown>
                  <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                  <Dropdown.List>
                    <Dropdown.Option>Tran Van Dat</Dropdown.Option>
                    <Dropdown.Option>Tran Van A</Dropdown.Option>
                    <Dropdown.Option>Tran Van B</Dropdown.Option>
                    <Dropdown.Option>Ngo Thi C</Dropdown.Option>
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Label>Start Date</Label>
                <DatePicker
                  onChange={setStartDate}
                  value={startDate}
                  format="dd-MM-yyyy"
                />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Label>Raised Amount *</Label>
                <Input
                  placeholder="$0.00 USD"
                  control={control}
                  name="raised"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Video</Label>
                <Input
                  placeholder="Video"
                  name="video"
                  control={control}
                ></Input>
              </FormGroup>
              <p className="text-sm font-medium text-text3 mb-[45px] text-start">
                Place Youtube or Vimeo Video URL
              </p>
              <FormGroup>
                <Label>Country</Label>
                <Dropdown>
                  <Dropdown.Select
                    placeholder={getDropdownLabel(
                      "country",
                      "Select a country"
                    )}
                  ></Dropdown.Select>
                  <Dropdown.List>
                    <Dropdown.Search
                      placeholder="select a country"
                      onChange={setFilterCountries}
                    ></Dropdown.Search>
                    {countries &&
                      countries.length > 0 &&
                      countries.map((country) => (
                        <Dropdown.Option
                          key={uuidV4()}
                          onClick={() =>
                            handleSelectDropdownOption(
                              "country",
                              country?.name?.common
                            )
                          }
                        >
                          {country?.name?.common}
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Label>End Date</Label>
                <DatePicker
                  value={endDate}
                  onChange={setEndDate}
                  format="dd-MM-yyyy"
                ></DatePicker>
              </FormGroup>
            </div>
          </FormRow>
          <div className="text-center">
            <Button type="submit" kind="primary" className="px-10 mx-auto ">
              Submit new campaign{" "}
            </Button>
          </div>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
