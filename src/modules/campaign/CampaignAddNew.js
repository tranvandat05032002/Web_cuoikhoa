import React from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "../../components";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ImageUploader from "quill-image-uploader";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
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
    </div>
  );
};

export default CampaignAddNew;
