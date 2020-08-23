activate_this = 'D:/TRPO/KR_TRPO_Modern/DJANGO/DJANGO/Scripts/activate_this.py'
# execfile(activate_this, dict(__file__=activate_this))
exec(open(activate_this).read(),dict(__file__=activate_this))

import os
import sys
import site

# Add the site-packages of the chosen virtualenv to work with
site.addsitedir('D:/TRPO/KR_TRPO_Modern/DJANGO/DJANGO')




# Add the app's directory to the PYTHONPATH
sys.path.append('D:/TRPO/KR_TRPO_Modern/DJANGO/DJANGO')
sys.path.append('D:/TRPO/KR_TRPO_Modern/DJANGO/DJANGO/')

os.environ['DJANGO_SETTINGS_MODULE'] = 'DJANGO.settings'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "DJANGO.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()