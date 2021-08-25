import { auth } from '@/lib/firebase-admin';
import { getAllFeedback } from '@/lib/db-admin';
// import { logger, formatObjectKeys } from '@/utils/logger';

const Sites = async (req, res) => {
  const siteId = req.query.siteId;
  try {
    // const { uid } = await auth.verifyIdToken(req.headers.token);
    // const { sites } = await getUserSites(uid);
    const { feedback } = await getAllFeedback(siteId);

    res.status(200).json({ feedback });
  } catch (error) {
    // logger.error(
    //   {
    //     request: {
    //       headers: formatObjectKeys(req.headers),
    //       url: req.url,
    //       method: req.method
    //     },
    //     response: {
    //       statusCode: res.statusCode
    //     }
    //   },
    //   error.message
    // );

    res.status(500).json({ error });
  }
};

export default Sites;
