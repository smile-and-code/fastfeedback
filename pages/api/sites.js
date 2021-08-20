import { auth } from '@/lib/firebase-admin';
import { getUserSites } from '@/lib/db-admin';
// import { logger, formatObjectKeys } from '@/utils/logger';

const Sites = async (req, res) => {
  try {
    // const { uid } = await auth.verifyIdToken(req.headers.token);
    // const { sites } = await getUserSites(uid);
    const { sites } = await getUserSites();

    res.status(200).json({ sites });
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
