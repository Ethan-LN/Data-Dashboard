import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ManageStaff } from "../path/to/ManageStaff"; // Adjust the path accordingly

const mockAxios = new MockAdapter(axios);

test("renders loading state and then staff data", async () => {
  const mockStaffData = [
    {
      id: "1",
      first_name: "John",
      last_name: "Black",
      age: "32",
      email: "johnw@gmail.com",
      contact: "0434876765",
      access_level: "admin",
    },
  ];

  // Mock axios.get to return a resolved promise with mockStaffData
  mockAxios.onGet("/api/staff/").reply(200, mockStaffData);

  render(<ManageStaff />);

  // Verify that loading state is displayed
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for the staff data to be loaded and displayed
  await waitFor(() => {
    const firstNameColumn = screen.getByText("First Name");
    expect(firstNameColumn).toBeInTheDocument();
  });
});
