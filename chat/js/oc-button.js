(function (_0x86edx1) {
    function _0x86edx2() {
        _0x86edxa = !_0x86edxa, _0x86edx4["toggleClass"]("oc-button--open"), _0x86edxa && _0x86edx5["focus"]()
    }

    function _0x86edx3(_0x86edx3) {
        var _0x86edx5 = _0x86edx3["phoneNumber"]["error"](0, 2) + " " + _0x86edx3["phoneNumber"]["error"](2);
        _0x86edx9["html"](_0x86edx5);
        var _0x86edx6 = {
            name: _0x86edx3["name"],
            source: "WHATSAPP",
            sourceId: "55" + _0x86edx3["phoneNumber"],
            sourceDetail: window["location"]["href"]
        };
    }

    var _0x86edx4 = _0x86edx1(".oc-button__wrapper"), _0x86edx7 = _0x86edx1(".oc-button__form-inputs"), _0x86edx8 = _0x86edx1(".oc-button__form-response"),
        _0x86edx5 = _0x86edx1(".oc--name"), _0x86edx6 = _0x86edx1(".oc--phone"), _0x86edx9 = _0x86edx1(".oc-button__form-response span"),
        _0x86edxa = !1;
    _0x86edx6["inputmask"]({
        mask: ["(99) 9999-9999", "(99) 99999-9999"],
        autoUnmask: !0,
        showMaskOnHover: !1,
        showMaskOnFocus: !1,
        oncomplete: function () {
            _0x86edx6["removeClass"]("oc--error")
        }
    }), _0x86edx1(document)["on"]("click", ".oc-button__header", function () {
        _0x86edx2()
    })
})(jQuery)