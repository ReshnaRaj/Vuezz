import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const RegistrationForm = ({ formData, errors, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div>
        <label className="block text-sm font-medium mb-1">
          First Name<span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          className="border px-4 py-3 rounded h-12"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs">{errors.firstName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Last Name<span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="border px-4 py-3 rounded h-12"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">{errors.lastName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Country of Residence<span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.country}
          onValueChange={(value) => handleChange("country", value)}
        >
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="India">India</SelectItem>
            <SelectItem value="UAE">UAE</SelectItem>
          </SelectContent>
        </Select>
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">{errors.country}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Region<span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.region}
          onValueChange={(value) => handleChange("region", value)}
        >
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="South">South</SelectItem>
            <SelectItem value="North">North</SelectItem>
          </SelectContent>
        </Select>
        {errors.region && (
          <p className="text-red-500 text-xs mt-1">{errors.region}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Email Address<span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="border px-4 py-3 rounded h-12"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Confirm Email Address<span className="text-red-500">*</span>
        </label>
        {/* <Input className="border p-2 rounded" /> */}
        <Input
          value={formData.confirmEmail}
          onChange={(e) => handleChange("confirmEmail", e.target.value)}
          className="border px-4 py-3 rounded h-12"
        />
        {errors.confirmEmail && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmEmail}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Nationality<span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.nationality}
          onValueChange={(value) => handleChange("nationality", value)}
        >
          {/* <SelectTrigger className="w-full border px-4 py-3 rounded h-12"> */}
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select nationality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Indian">Indian</SelectItem>
            <SelectItem value="Emirati">Emirati</SelectItem>
          </SelectContent>
        </Select>
        {errors.nationality && (
          <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Mobile Number<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <Select
            value={formData.mobileCode}
            onValueChange={(value) => handleChange("mobileCode", value)}
          >
            {/* <SelectTrigger className="w-24 border px-4 py-3 rounded h-12"> */}
            <SelectTrigger className="w-34 min-h-[48px] px-4 py-2 border rounded">
              <SelectValue placeholder="+91" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+91">+91</SelectItem>
              {/* <SelectItem value="+971">+971</SelectItem> */}
            </SelectContent>
          </Select>
          <Input
            value={formData.mobileNumber}
          onChange={(e) => {
    const value = e.target.value;
    // Allow only digits
    if (/^\d{0,10}$/.test(value)) {
      handleChange("mobileNumber", value);
    }
  }}
            className="border px-4 py-3 rounded h-12"
          />
          
        </div>
        {errors.mobileNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>
          )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Company Name<span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
          className="border px-4 py-3 rounded h-12"
        />
         {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Job Title<span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className="border px-4 py-3 rounded h-12"
        />
        {errors.jobTitle && (
          <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Company Type<span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.companyType}
          onValueChange={(value) => handleChange("companyType", value)}
        >
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Private">Private</SelectItem>
            <SelectItem value="Government">Government</SelectItem>
          </SelectContent>
        </Select>
         {errors.companyType && <p className="text-red-500 text-xs mt-1">{errors.companyType}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Industry<span className="text-red-500">*</span>
        </label>
        <Select value={formData.industry}
          onValueChange={(value) => handleChange("industry", value)}>
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
          </SelectContent>
        </Select>
         {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;
