slider-package
===============================

A Custom Jupyter Widget Library

Installation
------------

To install use pip:

    $ pip install slider_package
    $ jupyter nbextension enable --py --sys-prefix slider_package


For a development installation (requires npm),

    $ git clone https://github.com//slider-package.git
    $ cd slider-package
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix slider_package
    $ jupyter nbextension enable --py --sys-prefix slider_package
