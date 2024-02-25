case "GET":
      try {
        const session =
          await stripe.checkout.sessions.retrieve(req.query.session_id);

        res.send({
          status: session.status,
          customer_email: session.customer_details.email
        });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;