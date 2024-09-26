'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "../ui/select"

const serviceOptions = [
    "Refrigerator Repair",
    "Dishwasher Repair",
    "Washer Repair",
    "Dryer Repair",
    "Oven Repair",
] as const

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50, { message: "Name must be less than 50 characters" }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  emailAddress: z.string().email({ message: "Email address is invalid" }),
  serviceType: z.enum(serviceOptions, { required_error: "Service type is required" }),
  address: z.string().min(10, { message: "Address must be at least 10 characters" }).max(50, { message: "Address must be less than 50 characters" }),
  comments: z.string().min(10, { message: "Comments must be at least 10 characters" }).max(500, { message: "Comments must be less than 500 characters" }),
});

const ContactForm = () => {
    //   Define the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
            emailAddress: "",
            serviceType: undefined,
            address: "",
            comments: "",
        }
    })

    //   Define the submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        form.reset()
    }

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel id="name">Name</FormLabel>
                    <FormControl>
                      <Input autoComplete="name" placeholder="Enter your name" {...field} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel id="phoneNumber">Phone Number</FormLabel>                                                                      
                    <FormControl>
                      <Input autoComplete="tel" placeholder="Enter your phone number" {...field} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel id="emailAddress">Email Address</FormLabel>
                    <FormControl>
                      <Input autoComplete="email" placeholder="Enter your email address" {...field} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel id="serviceType">Service Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg">
                        <SelectGroup>
                          {serviceOptions.map((option) => (
                            <SelectItem 
                              key={option} 
                              value={option} 
                              className="cursor-pointer p-2 hover:bg-gray-100 transition-colors duration-150"
                              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel id="address">Address</FormLabel>
                  <FormControl>
                    <Textarea autoComplete="address" placeholder="Enter your address" {...field} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel id="comments">Comments</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter the details about the issue" {...field} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-150">Submit</Button>
          </form>
        </Form>
      </div>
    )
}

export default ContactForm