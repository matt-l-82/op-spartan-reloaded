// import { useUserStore, User } from "@/store/userStore";
import { useState, useEffect } from "react";
import { checkPermission } from "./checkPermission";
import { useUserContext } from "../../contexts/user.context";

const Permission = (props) => {
  const {
    // children is the content that will be displayed if a user has access
    children,
    // noAccess can be a function or a component. This runs or is displayed if a user doesn't have access
    noAccess,
    /**
     * This prop is used in conjunction with the "owner" role. It should be used to determine if a user
     * is an owner/author of a specific resource. For example, a blog website could have a comments section
     * and a user should be able to see edit/delete buttons if they are owners of a comment.
     *
     * @example
     *
     * <Permission entityOwnerId={comment.user.uid}>
     *  <EditButton />
     *  <DeleteButton />
     * </Permission>
     */
    entityOwnerId,
    /**
     * Roles array is used to specify roles that are required for a user to be able to access content
     */
    roles = [],
    /**
     * The `type` prop is used to determine the check type against roles.
     * At the moment it can be either one-of or all-of. For the former, a user needs to
     * match only one of the roles, whilst for the latter, checks for all roles must return true
     */
    type = "one-of",
    // Log permission data/result
    debug = false,
  } = props;
  const { currentUser: user } = useUserContext();
  console.log("in permission", user);
  const [hasAccess, setHasAccess] = useState(
    user
      ? checkPermission(user, roles, {
          type,
          entityOwnerId,
          debug,
        })
      : false
  );
  useEffect(() => {
    if (!user) {
      setHasAccess(false);
      return;
    }
    const doesHaveAccess = checkPermission(user, roles, {
      type,
      entityOwnerId,
      debug,
    });
    setHasAccess(doesHaveAccess);
  }, [user?.uid, user?.roles, entityOwnerId, roles, type]);

  const renderNoAccess = () => {
    if (typeof noAccess === "function") {
      return noAccess({
        user,
        hasAccess,
      });
    }
    return noAccess;
  };
  return hasAccess ? children : renderNoAccess() || null;
};
export default Permission;
