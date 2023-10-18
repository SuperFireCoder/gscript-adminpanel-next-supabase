export const SubscriptionLabel = (name: string) => {
  return {
    title: `Are you sure that you’d like to cancel ${name}’s Standard subscription?`,
    subTitle: "If you cancel a subscription, that action cannot be reversed.",
    submitBtnTitle: "Cancel subscription",
    cancelBtnTitle: "I’ve changed my mind",
  };
};

export const UserDeleteLabel = (email: string) => {
  return {
    title: `Are you sure that you’d like to delete ${email}?`,
    subTitle: "If you delete a user, that action cannot be reversed.",
    submitBtnTitle: "Yes, delete",
    cancelBtnTitle: "No, cancel",
  };
};

export const AdminDeleteLabel = (email: string) => {
  return {
    title: `Are you sure that you’d like to delete ${email}?`,
    subTitle: "If you delete an admin user, that action cannot be reversed.",
    submitBtnTitle: "Yes, delete",
    cancelBtnTitle: "No, cancel",
  };
};
