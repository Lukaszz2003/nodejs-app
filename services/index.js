import { Contacts } from "./schemas/contacts.js";
import { Users } from "#services/schemas/user.js";

export const getAllContacts = async () => {
  return Contacts.find();
};
export const getByIdContact = async (id) => {
  return Contacts.findOne({ _id: id });
};
export const createContact = async (body) => {
  return Contacts.create({ ...body });
};
export const removeContact = async (id) => {
  return Contacts.findByIdAndRemove({ _id: id });
};
export const updateContact = async (id, body) => {
  return Contacts.findByIdAndUpdate({ _id: id }, body);
};
export const updateStatusContact = async (id, body) => {
  return Contacts.findByIdAndUpdate({ _id: id }, body);
};

export const validateEmail = async (email) => {
  const user = await Users.findOne({ email });
  return user;
};
export const createUser = async ({ email, password }) => {
  const result = await Users.create({ email, password });
  return result;
};
export const updateUserToken = async ({ id, token }) => {
  const result = await Users.findByIdAndUpdate(
    id,
    { token: token },
    { new: true }
  );
  return result;
};
export const findByIdUser = async ({ id }) => {
  const result = await Users.findById(id);
  return result;
};
export const updateSubscription = async ({ id, subscription }) => {
  const result = await Users.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  return result;
};

export const updateAvatar = async ({ id, avatarURL }) => {
  const result = await Users.findByIdAndUpdate(
    id,
    { avatarURL },
    { new: true }
  );
  return result;
};
