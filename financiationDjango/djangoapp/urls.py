from rest_framework import routers
from .api import VisitViewSet


router = routers.DefaultRouter()
router.register('api/visit', VisitViewSet, 'visit')

urlpatterns = router.urls