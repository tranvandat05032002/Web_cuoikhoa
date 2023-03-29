import React from "react";
import { useForm } from "react-hook-form";
import { Button, Textarea } from "../../components";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ImageUploader from "quill-image-uploader";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { IconCoin } from "../../components/icons";
Quill.register("modules/imageUploader", ImageUploader);
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
        // imgbbAPI
        upload: async (file) => {
          // console.log("upload: ~ file", file);
          // const bodyFormData = new FormData();
          // console.log("upload: ~ bodyFormData", bodyFormData);
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  const { handleSubmit, control } = useForm();
  const handleSubmitCampaign = () => {};
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-16 bg-text4 mb-10 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
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
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Tran Van Dat</Dropdown.Option>
                <Dropdown.Option>Tran Van A</Dropdown.Option>
                <Dropdown.Option>Tran Van B</Dropdown.Option>
                <Dropdown.Option>Ngo Thi C</Dropdown.Option>
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
      </form>

      <FormGroup>
        <div className="flex text-white bg-secondary rounded-[10px] items-center mb-[28px]">
          <div className="text-[25px] px-[45px] py-[31px] flex items-center justify-start gap-x-6 font-bold">
            <IconCoin></IconCoin>
            <h1 className="">You will get 90% of total raised</h1>
          </div>
          <img srcSet="/Perk/Union.png 2x" alt="" className="" />
        </div>
        <form onSubmit={handleSubmitCampaign}>
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
                <Input
                  name="star_tDate"
                  placeholder="Start Date"
                  control={control}
                ></Input>
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
                  <Dropdown.Select placeholder="Select a Country"></Dropdown.Select>
                  <Dropdown.List>
                    <Dropdown.Option>Tran Van Dat</Dropdown.Option>
                    <Dropdown.Option>Tran Van A</Dropdown.Option>
                    <Dropdown.Option>Tran Van B</Dropdown.Option>
                    <Dropdown.Option>Ngo Thi C</Dropdown.Option>
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Label>End Date</Label>
                <Input
                  name="end_Date"
                  placeholder="End Date"
                  control={control}
                ></Input>
              </FormGroup>
            </div>
          </FormRow>
        </form>

        <div className="text-center">
          <Button kind="primary" className="px-10 mx-auto ">
            Submit new campaign{" "}
          </Button>
        </div>
      </FormGroup>
    </div>
  );
};

export default CampaignAddNew;
