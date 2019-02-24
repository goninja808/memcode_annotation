import router from '~/router';

import authenticate from '~/middlewares/authenticate';
import catchAsync from '~/services/catchAsync';

// TODO make all routes like CourseApi.rate()
import CourseApi from '~/api/CourseApi';
router.use('/api/courses', CourseApi);
import rate from '~/api/CourseApi/rate';
router.put('/api/courses/:id/rate', authenticate, catchAsync(rate));

import ProblemApi from '~/api/ProblemApi';
router.use('/api/problems', ProblemApi);

import ProblemUserIsLearningApi from '~/api/ProblemUserIsLearningApi';
router.use('/api/problemsUserIsLearning', ProblemUserIsLearningApi);

import CourseCategoryApi from '~/api/CourseCategoryApi';
router.use('/api/courseCategories', CourseCategoryApi);

import NotificationApi from '~/api/NotificationApi';
router.use('/api/notifications', NotificationApi);
import markAllNotificationsAsRead from './NotificationApi/markAllNotificationsAsRead';
router.put('/api/notifications/markAllNotificationsAsRead', catchAsync(markAllNotificationsAsRead));
import getNotificationStatsForUser from './NotificationApi/getNotificationStatsForUser';
router.get('/api/notifications/stats-for-user', catchAsync(getNotificationStatsForUser));

import CourseUserIsLearningApi from '~/api/CourseUserIsLearningApi';
router.use('/api/coursesUserIsLearning', CourseUserIsLearningApi);

import AuthApi from '~/api/AuthApi';
router.use('/api/auth', AuthApi);

import PageApi from '~/api/PageApi';
router.use('/api/pages', PageApi);

// import AdminApi from '~/api/AdminApi';
// router.use('/api/admin', AdminApi);

import FileApi from '~/api/FileApi';
router.use('/api/files', FileApi);