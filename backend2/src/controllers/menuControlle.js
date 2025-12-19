import express from "express";
import Menu from "../../model/Menu.js";

export const getAllMenu = async (req, res) => {
  try {
    const menus = await Menu.find().sort({ createdAt: -1 });
    res.status(200).json(menus);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({ message: "Error fetching menu", error });
  }
};

export const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(menu);
  } catch (error) {
    console.error("Error fetching menu by ID:", error);
    res.status(500).json({ message: "Error fetching menu by ID", error });
  }
};

export const createMenu = (req, res) => {
  try {
    const { Bn, It, Sc } = req.body;
    // console.log(Bn, It);
    const newMenu = new Menu({ brandName: Bn, items: It, socials: Sc });

    newMenu.save();
    res.status(201).json({ message: "MENU CREATED SUCCESSFULLY" });
  } catch (error) {
    console.error("Error creating menu:", error);
    res.status(500).json({ message: "Error creating menu", error });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const { Bn, It, Sc } = req.body;

    const updateMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      {
        brandName: Bn,
        items: It,
        socials: Sc,
      },
      { new: true }
    );

    if (!updateMenu) return res.status(404).json({ message: "Menu not found" });

    res.status(200).json(updateMenu);
  } catch (error) {
    console.error("Error updating menu:", error);
    res.status(500).json({ message: "Error updating menu", error });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { Bn, It, Sc } = req.body;
    const deleteMenu = await Menu.findByIdAndDelete(req.params.id);
    if (!deleteMenu) return res.status(404).json({ message: "Menu not found" });

    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    console.error("Error deleting menu:", error);
    res.status(500).json({ message: "Error deleting menu", error });
  }
};
