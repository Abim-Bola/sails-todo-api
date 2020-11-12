module.exports = async function (req, res, next) {
  try {
    if (!req.headers && !req.headers.authoriation) {
      return res.status(401).send({
        status: false,
        message: "unauthorized user"
      });
    }

      const token = req.headers.authorization;

      //decode user
      const decodedUser = await sails.helpers.user.decodeUser.with({
          token,
      });

      const user = await User.findOne({
          id: decodedUser.id
      });

      if(!user){
          return res.status(401).send({
              status: false,
              massage: "unauthorized"
          });
        }

        req.user = user;
        next();
        return;
    
  } catch (error) {
      
    return res.status(401).send({
        status: false,
        message: 'Unauthorized User',
      });
  }
};
